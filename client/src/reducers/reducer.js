import {
  MEMES_IS_LOADING,
  MEMES_IS_LOADED,
  MEMES_IS_FAIL,
  GET_USER,
} from '../actions/actions';

const initialState = {
  currentUser: "",
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export default function reducer(state = initialState, action) {
  console.log("State: ", state);

  switch (action.type) {
    case MEMES_IS_LOADING: {
      return { ...state, isLoading: true };
    }

    case MEMES_IS_LOADED: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload,
      };
    }

    case MEMES_IS_FAIL: {
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        error: action.error,
      };
    }

    case GET_USER: {
      return state;
    }

    default:
      return state;
  }
}
