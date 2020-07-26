import {SEARCH_USER, GET_REPOS} from '../redux/global.types.js';
import {call, put, takeLatest} from 'redux-saga/effects';
import * as resources from '../resources/resource.js';
import * as actions from '../redux/global.actions.js';
import filterData from '../utility/utility.js';

export function* searchUser(action) {
    try {
        const response  = yield call(resources.searchUser, action.payload);
        const data = filterData('USER', response);
        yield put(actions.searchUserSuccess(data));
        yield put(actions.getRepos(data.reposUrl));
    }
    catch (error) {
        yield put(actions.searchUserFailure());
    }
}

export function* getRepos(action) {
    try {
        const response = yield call(resources.getRepos, action.payload)
        const {repos, languages} = filterData('REPOS', response);
        yield put(actions.getReposSuccess({
            repos,
            languages
        }));
    }
    catch (error) {
        yield put(actions.getReposFailure())
    }
}

export function* watchSearchUser() {
    yield takeLatest(SEARCH_USER, searchUser);
}

export function* watchGetRepos() {
    yield takeLatest(GET_REPOS, getRepos)
}