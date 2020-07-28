import React, { useCallback, useEffect, useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import { Provider, connect } from "react-redux";
import MemeMaterial_ from "./MemeMaterial";
import Button from "@material-ui/core/Button";
import { MenuAppBar } from "./Navigation";

import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import reducer from "../reducers/reducer";
import { AuthContext } from "../context/AuthContext";

// const initialState =
//     [
//       {
//         id: 0,
//         liked: false,
//         author: 'MAMAM',
//       },
//       {
//         id: 1,
//         liked: false,
//         author: 'Bill',
//       },
//       {
//         id: 2,
//         liked: false,
//         author: 'Elon',
//       },
//       {
//         id: 3,
//         liked: false,
//         author: 'Jack',
//       },
//       {
//         id: 4,
//         liked: false,
//         author: 'Bill',
//       },
//     ]

// const store = createStore(reducer, initialState, applyMiddleware(thunk));

// function mapStateToProps(state) {

//   return {list: state}
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     tapLike: (id) => dispatch(like(id)),
//     newMeme: (meme) => dispatch(addMeme(meme)),
//     loadMemes: () => dispatch(initMemes())
//   }
// }

// const Meme = connect(mapStateToProps, mapDispatchToProps)(MemeMaterial_)

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Memstagram
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  appBar: {
    position: "relative",
  },
  layout: {
    width: "auto",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
      width: 460,
      marginLeft: "auto",
      marginRight: "auto",
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
    display: "flex",
    justifyContent: "flex-end",
  },
  button: {
    marginTop: theme.spacing(3),
    marginLeft: theme.spacing(1),
  },
}));

export default function Main_(props) {
  console.log('Main props', props);
  const [currentUser, setCurrentUser] = useState("");
  const classes = useStyles();
  const [email, setEmail] = useState("");


  const { list, loadMemes, getUser, like } = props;

  useEffect(() => {
    loadMemes();
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <MenuAppBar />
          <MemeMaterial_ list={list} like={like} />
        </Paper>
        <Copyright />
      </main>
    </React.Fragment>
  );
}
