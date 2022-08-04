
import TYPES from '../TYPES';

const userReducer = (state = { }, action) => {
  switch (action.type) {
    case TYPES.SET_USER_ACTION:
      return { ...state, ...action.payload };
    case TYPES.CLEAR_USER_ACTION:
      return action.payload;
    default:
      return { ...state };
  }
};

export default {
  userReducer
}

