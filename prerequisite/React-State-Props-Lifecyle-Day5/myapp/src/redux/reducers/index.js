import {combineReducers} from 'redux';
import userReducer from './user';
import todosReducer from './todos';

let rootReducer = combineReducers({
    userReducer:userReducer,
    todosReducer:todosReducer
});

export default rootReducer;