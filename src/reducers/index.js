import * as ActionTypes from '../constants/action-types';

const initialState = {
  books: [],
};

export default function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return { ...state, books: state.books.concat(action.payload) };
    default:
      return state;
  }
}
