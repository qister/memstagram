import React, { useEffect } from 'react'
import Main_ from '../components/Main'

import { Provider, connect } from 'react-redux';
import {addMeme, like, initMemes} from '../actions/actions.mjs'

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer';

const initialState = 
    [
    //   {
    //     id: 0,
    //     liked: false,
    //     author: 'MAMAM',
    //   },
    //   {
    //     id: 1,
    //     liked: false,
    //     author: 'Bill',
    //   },
    //   {
    //     id: 2,
    //     liked: false,
    //     author: 'Elon',
    //   },
    //   {
    //     id: 3,
    //     liked: false,
    //     author: 'Jack',
    //   },
    //   {
    //     id: 4,
    //     liked: false,
    //     author: 'Bill',
    //   },
    ]

const store = createStore(reducer, initialState, applyMiddleware(thunk));


function mapStateToProps(state) {
  return {list: state}
}

function mapDispatchToProps(dispatch) {
  return {
    tapLike: (id) => dispatch(like(id)),
    newMeme: (meme) => dispatch(addMeme(meme)),
    loadMemes: () => dispatch(initMemes())
  }
}

const Main = connect(mapStateToProps, mapDispatchToProps)(Main_)


export const MainPage = () => {

    return(
        <Provider store={store}>
            <Main />
        </Provider>
    )
}