import React, { useEffect } from "react";
import Main_ from "../components/Main";

import { Provider, connect } from "react-redux";
import { addMeme, like, initMemes, getUser } from "../actions/actions.mjs";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";

// const initialState = {
//   data: [],
//   currentUser: '',
// }

// const store = createStore(reducer, initialState, applyMiddleware(thunk));

function mapStateToProps(state) {
  return {
    list: state.reducer.data,
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    tapLike: (id) => dispatch(like(id)),
    newMeme: (meme) => dispatch(addMeme(meme)),
    loadMemes: () => dispatch(initMemes()),
    getUser: () => dispatch(getUser()),
  };
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Main_);

export const MainPage = () => {
  return <Main />;
};
