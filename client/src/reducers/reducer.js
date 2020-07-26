import {
  MEMES_ARE_LOADING,
  MEMES_LOADED,
  MEMES_LOAD_FAILED,
  GET_USER,
  SET_CURRENT_USER,
} from '../actions/actions';

const initialState = {
  currentUser: "",
  data: [],
  isLoading: false,
  isLoaded: false,
  error: null,
};

export const reducer = (state = initialState, action) => {
  console.log("State: ", state);

  switch (action.type) {
    case MEMES_ARE_LOADING: {
      return { ...state, isLoading: true };
    }

    case MEMES_LOADED: {
      return {
        ...state,
        isLoading: false,
        isLoaded: true,
        data: action.payload,
      };
    }

    case MEMES_LOAD_FAILED: {
      return {
        ...state,
        isLoaded: false,
        isLoading: false,
        error: action.error,
      };
    }

    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.payload,
      };
    }

    case GET_USER: {
      return { 
        ...state, 
        currentUser: action.payload 
      };
    }

    default:
      return state;
  }
}
