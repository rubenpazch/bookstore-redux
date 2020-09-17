import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

export default function rootReducer(initialState) {
  return combineReducers({
    booksReducer: booksReducer(initialState),
    filterReducer: filterReducer(initialState),
  });
}
