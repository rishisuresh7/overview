import {combineReducers} from 'redux';
import appReducer from './global.reducer.js';

const rootReducer = combineReducers({
    app: appReducer,
});

export default rootReducer;