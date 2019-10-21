import {combineReducers} from 'redux';
import {lab1reducer} from './lab1';
import {lab2reducer} from './lab2';

export default combineReducers({
  lab1: lab1reducer,
  lab2: lab2reducer
});
