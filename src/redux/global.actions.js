import {SEARCH_USER, SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, GET_REPOS, GET_REPOS_SUCCESS, GET_REPOS_FAILURE} from './global.types.js';

export const searchUser = (payload) => {
    return {
        type: SEARCH_USER,
        payload: payload
    }
}

export const searchUserSuccess = (payload) => {
    return {
        type: SEARCH_USER_SUCCESS,
        payload: payload
    }
}

export const searchUserFailure = () => {
    return {
        type: SEARCH_USER_FAILURE,
        payload: 'SOME ERROR HAPPENED'
    }
}

export const getRepos = (payload) => {
    return {
        type: GET_REPOS,
        payload: payload
    }
}

export const getReposSuccess = (payload) => {
    return {
        type: GET_REPOS_SUCCESS,
        payload: payload
    }
}

export const getReposFailure = () => {
    return {
        type: GET_REPOS_FAILURE,
        payload: 'SOME ERROR HAPPENED'
    }
}