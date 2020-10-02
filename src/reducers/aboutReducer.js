import {
  RETRIEVING_USER_INFO,
  RETRIEVED_USER_INFO,
  RETRIEVE_USER_INFO_ERROR,
} from "../actions/actionTypes";

const initialState = {
  isLoading: false,
  user: [],
  err: null,
};

const aboutReducer = (state = initialState, action) => {
  switch (action.type) {
    case RETRIEVING_USER_INFO:
      return {
        ...state,
        isLoading: true,
      };
    case RETRIEVED_USER_INFO:
      return {
        ...state,
        isLoading: false,
        user: action.payload,
      };
    case RETRIEVE_USER_INFO_ERROR:
      return {
        ...state,
        isLoading: null,
        user: [],
        err: action.payload.err,
      };
    default:
      return state;
  }
};

export default aboutReducer;
