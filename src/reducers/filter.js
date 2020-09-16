import * as ActionTypes from '../constants/action-types';

const filterReducer = initialState => (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return {
        ...state,
        books: state.books.filter(b => b.category === action.payload),
      };
    default:
      return state;
  }
};

export default filterReducer;
