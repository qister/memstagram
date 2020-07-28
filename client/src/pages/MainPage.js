import React, { useEffect } from "react";
import Main_ from "../components/Main";

import { connect } from "react-redux";
import { addMeme, like, initMemes, getUser } from "../actions/actions.mjs";

function mapStateToProps(state) {
  return {
    list: state.reducer.data,
    currentUser: state.currentUser,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    like: (id) => dispatch(like(id)),
    newMeme: (meme) => dispatch(addMeme(meme)),
    loadMemes: () => dispatch(initMemes()),
    getUser: () => dispatch(getUser()),
  };
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Main_);

export const MainPage = () => {
  return <Main />;
};
