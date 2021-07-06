import {fetchSmurfReducer} from './fetchSmurfReducer';
import {addSmurfReducer} from './addSmurfReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    fetchSmurfReducer,
    addSmurfReducer
});
