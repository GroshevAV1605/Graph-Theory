import {combineReducers} from 'redux';
import {lab1reducer} from './lab1';
import {lab2reducer} from './lab2';
import {lab3reducer} from './lab3';

export default combineReducers({
  lab1: lab1reducer,
  lab2: lab2reducer,
  lab3: lab3reducer
});
