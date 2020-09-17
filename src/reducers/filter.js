import * as ActionTypes from '../constants/action-types';

const filterReducer = filter => (InitialFilter = filter, action) => {
  switch (action.type) {
    case ActionTypes.CHANGE_FILTER:
      return {
        filter: action.payload,
      };
    default:
      return {
        filter: InitialFilter,
      };
  }
};

export default filterReducer;
