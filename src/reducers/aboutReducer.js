import { LOAD_USER_INFO } from "../actions/actionTypes";

const initialState = {
  user: [],
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USER_INFO:
      return {
        ...state,
        user: action.payload,
      };
    default:
      return state;
  }
};

export default aboutReducer;
