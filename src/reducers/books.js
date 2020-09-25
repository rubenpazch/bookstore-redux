import * as ActionTypes from '../constants/action-types';

const booksReducer = defaultBooks => (state = defaultBooks, action) => {
  switch (action.type) {
    case ActionTypes.ADD_BOOK:
      return [
        ...state,
        action.payload,
      ];
    case ActionTypes.REMOVE_BOOK:
      return [
        ...state,
      ].filter(bk => bk.idBook !== action.payload);
    default:
      return state;
  }
};

export default booksReducer;
