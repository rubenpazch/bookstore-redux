import { combineReducers } from 'redux';
import booksReducer from './books';
import filterReducer from './filter';

export default function rootReducer({ books, category }) {
  return combineReducers({
    booksReducer: booksReducer(books),
    filterReducer: filterReducer(category),
  });
}
