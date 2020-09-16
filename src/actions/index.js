import * as ActionTypes from '../constants/action-types';

const createBook = book => ({
  type: ActionTypes.ADD_BOOK,
  payload: book,
});

const removeBook = idBook => ({
  type: ActionTypes.REMOVE_BOOK,
  payload: idBook,
});

const filterChange = category => ({
  type: ActionTypes.CHANGE_FILTER,
  payload: category,
});

export {
  createBook,
  removeBook,
  filterChange,
};
