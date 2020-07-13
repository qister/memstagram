import axios from 'axios'
import { getMemes } from '../API/memesAPI'

export const LIKE_ID = 'LIKE_ID'
export const ADD_MEME = 'ADD_MEME'
export const LOAD_INITIAL_MEMES = 'LOAD_INITIAL_MEMES'
export const GET_USER = 'GET_USER'

export const MEMES_IS_LOADING = 'MEMES_IS_LOADING'
export const MEMES_IS_LOADED = 'MEMES_IS_LOADED'
export const MEMES_IS_FAIL = 'MEMES_IS_FAIL'
export const GET_USER_EMAIL = 'GET_USER_EMAIL'

export function like(id) {
  return {
    type: LIKE_ID,
    payload: id
  }
};

export function addMeme(meme) {
  return {
    type: ADD_MEME,
    payload: meme,
  }
}

export const memesIsLoading = () => {
  return {
    type: MEMES_IS_LOADING
  }
}

export const memesIsLoaded = (data) => {
  return {
    type: MEMES_IS_LOADED,
    payload: data
  }
}

export const memesIsFail = (error) => {
  return {
    type: MEMES_IS_FAIL,
    payload: error
  }
}

export function initMemes() {
  return async function (dispatch) {
    dispatch(memesIsLoading())
      await getMemes()
        .then(data => dispatch(memesIsLoaded(data)))
        .catch(error => dispatch(memesIsFail(error)))
  }
}

export function getUser() {
  return{
    type: GET_USER
  }
}

export function getUserEmail() {
  return {
    type: GET_USER_EMAIL
  }
}
