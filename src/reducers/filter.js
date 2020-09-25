import * as ActionTypes from '../constants/action-types';

const filterReducer = filter => (InitialFilter = filter, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return action.payload;
    default:
      return InitialFilter;
  }
};

export default filterReducer;
