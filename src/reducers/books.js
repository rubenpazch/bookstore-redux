import * as ActionTypes from '../constants/action-types';

const booksReducer = defaultBooks => (state = defaultBooks, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return {
        ...state,
        books: state.defaultBooks,
      };
    case ActionTypes.REMOVE_BOOK:
      return {
        ...state,
        books: state.books.filter(b => b.idBook !== action.payload),
      };
    default:
      return state;
  }
};

export default booksReducer;
