import * as ActionTypes from '../constants/action-types';

const createBook = book => ({
  type: ActionTypes.ADD_BOOK,
  payload: book,
});

const removeBook = book => (
  {
    type: ActionTypes.REMOVE_BOOK,
    payload: book,
  }
);

export {
  createBook,
  removeBook,
};
