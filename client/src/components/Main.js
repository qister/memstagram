import React, { useCallback, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import { Provider, connect } from 'react-redux';
import MemeMaterial_ from './MemeMaterial'
import {addMeme, like, initMemes} from '../actions/actions.mjs'
import axios from 'axios';

import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk'
import reducer from '../reducers/reducer';


const initialState = 
    [
      {
        id: 0,
        liked: false,
        author: 'MAMAM',
      },
      {
        id: 1,
        liked: false,
        author: 'Bill',
      },
      {
        id: 2,
        liked: false,
        author: 'Elon',
      },
      {
        id: 3,
        liked: false,
        author: 'Jack',
      },
      {
        id: 4,
        liked: false,
        author: 'Bill',
      },
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

const Meme = connect(mapStateToProps, mapDispatchToProps)(MemeMaterial_)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Memstagram
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: 'relative',
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 460,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
      marginTop: theme.spacing(6),
      marginBottom: theme.spacing(6),
      padding: theme.spacing(3),
    },
  },
  buttons: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Main() {
  const classes = useStyles()
  
  return (
    <Provider store={store}>
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
            <Meme /> 
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
    </Provider>
  );
}
