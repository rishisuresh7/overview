import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, SEARCH_USER, GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from "./global.types";

const initState = {
    userData: {},
    isError: false,
    firstHit: true,
    isLoading: true,
    repos: [],
    isRepoLoading: true,
}

const appReducer = (state = initState, action) => {
    switch(action.type) {
        case SEARCH_USER:
            return {
                ...state,
                isLoading: true,
                firstHit: false,
            }
        case SEARCH_USER_SUCCESS:
            return {
                ...state,
                userData: action.payload,
                isError: false,
                isLoading: false,
            }
        case SEARCH_USER_FAILURE:
            return {
                ...state,
                userData: {},
                isError: true,
                isLoading: false,
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                isRepoError: false,
                isRepoLoading: false,
                ...action.payload,
                isError: false,
            }
        case GET_REPOS_FAILURE:
            return {
                ...state,
                isRepoError: true,
                isRepoLoading:false,
                repos: [],
                isError: true,
            }
        default:
            return state
    }
}

export default appReducer;