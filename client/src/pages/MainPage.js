import React from 'react'
import Main from '../components/Main'

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


export const MainPage = () => {
    return(
        // <Provider store={store}>
            <Main />
        // </Provider>       
    )
}