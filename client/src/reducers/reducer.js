import {
  MEMES_ARE_LOADING,
  MEMES_LOADED,
  MEMES_LOAD_FAILED,
  GET_USER,
  SET_CURRENT_USER,
  LIKE_ID,
} from "../actions/actions";

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
        currentUser: action.payload,
      };
    }

    case LIKE_ID: {
      console.log("State: ", state);

      const currentUser = JSON.parse(localStorage.getItem("userData")).email;

      return {
        ...state,
        data: state.data.map((meme) => {
          if (meme.id === action.payload) {
            return {
              ...meme,
              likedBy: meme.likedBy.some((user) => user === currentUser)
                ? meme.likedBy.filter((user) => user !== currentUser)
                : meme.likedBy.push(currentUser),
            }
          } else {
            return meme
          }
        }),
      };
    }

    default:
      return state;
  }
};
