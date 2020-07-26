import axios from 'axios'
import { getMemes, likeMeme } from '../API/memesAPI'

export const LIKE_ID = 'LIKE_ID'
export const ADD_MEME = 'ADD_MEME'
export const LOAD_INITIAL_MEMES = 'LOAD_INITIAL_MEMES'
export const GET_USER = 'GET_USER'
export const SET_CURRENT_USER = 'SET_CURRENT_USER'

export const MEMES_ARE_LOADING = 'MEMES_ARE_LOADING'
export const MEMES_LOADED = 'MEMES_LOADED'
export const MEMES_LOAD_FAILED = 'MEMES_LOAD_FAILED'
export const GET_USER_EMAIL = 'GET_USER_EMAIL'


export function addMeme(meme) {
  return {
    type: ADD_MEME,
    payload: meme,
  }
}

export const memesIsLoading = () => {
  return {
    type: MEMES_ARE_LOADING
  }
}

export const memesIsLoaded = (data) => {
  return {
    type: MEMES_LOADED,
    payload: data
  }
}

export const memesIsFail = (error) => {
  return {
    type: MEMES_LOAD_FAILED,
    payload: error
  }
}

export const initMemes = () => {
  return async (dispatch) => {
    dispatch(memesIsLoading())
      await getMemes()
        .then(data => dispatch(memesIsLoaded(data)))
        .catch(error => dispatch(memesIsFail(error)))
  }
}

export function like(id) {
  return async (dispatch) => {
    await dispatch(likeMeme(id))
  }
}

export const getUser = () => {
  const user = localStorage.getItem('userData').parse().email
  console.log(user);
  return{
    type: GET_USER,
    payload: user
  }
}

export function getUserEmail() {
  return {
    type: GET_USER_EMAIL
  }
}

export const setCurrentUser = (username) => {
  localStorage.setItem('memeUserName', username)
  return {
    type: SET_CURRENT_USER,
    payload: username
  }
}
