import React from 'react';
import { Provider, connect } from 'react-redux';
import { store } from './Store/Meme/actions.mjs';
import Meme_ from './Components/Meme'
// import like from './Store/Meme/actions.js'
import {addMeme, like} from './Store/Meme/actions.js'


// function List_({ list }) {
//   return list.map(meme => (
//     <div className='meme'>
//       <img className='big' src={`/memes/${meme.id}.jpg`} />
//     </div>
//   ));
// }

// const state = store.getState();
// mapStateToProps(state)

// const List = connect(state => ({
//     list: state,
// }))(List_)

// const like = (id) => {
//   return {
//     type: 'LIKE_ID',
//     payload: id
//   }
// };



function mapStateToProps(state) {
  return {list: state}
}

function mapDispatchToProps(dispatch) {
  return {
    tapLike: (id) => dispatch(like(id)),
    newMeme: (meme) => dispatch(addMeme(meme))
  }
}

const Meme = connect(mapStateToProps, mapDispatchToProps)(Meme_)

// const Meme = connect(state => ({
//   list: state,
// }))(Meme_)

export default function App() {

  // const [index, setIndex] = useState(2)  

  // function incrementIndex() {
  //   setIndex(index < state.length -1 ? index + 1 : index)
  // }

  // function decrementIndex() {
  //   setIndex(index > 0 ? index - 1 : index)
  // }

  return (
    <Provider store={store}>
      <div className='container'>
        <div className='app'>
        {/* <button onClick={decrementIndex}>◀</button>
        <button onClick={incrementIndex}>▶</button> */}
        <Meme /> 
        {/* <List /> */}
        </div>
      </div>
    </Provider>
  )
}