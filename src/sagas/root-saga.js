import {watchSearchUser, watchGetRepos} from './global.sagas.js';
import {all, call} from 'redux-saga/effects';

export default function* rootSaga(){
    yield all([
        call(watchSearchUser),
        call(watchGetRepos),
    ])
}