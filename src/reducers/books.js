import * as ActionTypes from '../constants/action-types';

const booksReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return {
        ...state,
        books: state.books.concat(action.payload),
      };
    default:
      return state;
  }
};

export default booksReducer;
