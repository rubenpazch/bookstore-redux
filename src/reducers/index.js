import { combineReducers } from 'redux';
import booksReducer from './books';

export default function rootReducer(initialState) {
  return combineReducers({
    booksReducer: booksReducer(initialState),
  });
}
