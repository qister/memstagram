import redux from 'redux';
import reducer from '../reducers/reducer';
import axios from 'axios'
// import { axiosListMeme } from '../api/getListMeme'

// const { createStore } = redux;

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

// let allMemes;

// const tempState = async () => {
//   try {
//     allMemes = await axios.get('/api/meme/getlist', {
//       params: {
          
//         }
//     })
//   }  catch(e) {
//     console.log(e.message);
    
//   }
// }

// getListMemeAction = (data) => {
//   return {
//     type: 'GET_LIST',
//     payload: data
//   }
// }

// export default getListMem = () => {
//   axiosListMeme()
//     .then(data => getListMemeAction(data))
// }

// tempState()


// export const store = createStore(reducer, initialState);


export function like(id) {
  return {
    type: 'LIKE_ID',
    payload: id
  }
};

export function addMeme(meme) {
  return {
    type: 'ADD_MEME',
    payload: meme,
  }
}

export function initMemes() {
  return async function(dispatch) {

      const allMemes = await axios.get('/api/meme/getlist', {
        params: {
          
          } 
      })
      
      dispatch({
        type: 'LOAD_INITIAL_MEMES',
        payload: allMemes.data,
      })
  }
}



// const addMeme = (meme) => {
//   return {
//     type: "ADD_MEME",
//     payload: meme,
//   };
// };

// store.dispatch(addMeme({
//   id: 6,
//   liked: false,
//   author: 'Max',
// }));

// store.dispatch({
//     type: "ADD_MEME",
//     payload: {
//         id: 7,
//         liked: true,
//         author: 'Max',
//     },
// })

// store.dispatch({
//     type: "DELETE_ID",
//     payload: 6,
// })


// console.log(store.getState());