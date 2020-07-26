import { SEARCH_USER_SUCCESS, SEARCH_USER_FAILURE, SEARCH_USER, GET_REPOS_SUCCESS, GET_REPOS_FAILURE } from "./global.types";

const initState = {
    userData: {},
    isSearchError: false,
    firstHit: true,
    erorr: '',
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
                isSearchError: false,
                erorr: '',
                isLoading: false,
            }
        case SEARCH_USER_FAILURE:
            return {
                ...state,
                userData: {},
                isSearchError: true,
                error: action.payload,
                isLoading: false,
            }
        case GET_REPOS_SUCCESS:
            return {
                ...state,
                isRepoError: false,
                isRepoLoading: false,
                ...action.payload,
            }
        case GET_REPOS_FAILURE:
            return {
                ...state,
                isRepoError: true,
                isRepoLoading:false,
                repos: []
            }
        default:
            return state
    }
}

export default appReducer;