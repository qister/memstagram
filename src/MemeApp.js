import React, { useState } from 'react';
import { Provider, connect } from 'react-redux';
import { store } from './Store/Meme/actions.mjs';
import List_ from './Components/List'
import Meme_ from './Components/Meme'
import like from './Store/Meme/actions'


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

const state = store.getState()

function mapStateToProps(state) {
  return {list: state}
}

function mapDispatchToProps(dispatch) {
  return {
    tapLike: (id) => dispatch(like(id)),
  }
}

const Meme = connect(mapStateToProps, mapDispatchToProps)(Meme_)

// const Meme = connect(state => ({
//   list: state,
// }))(Meme_)

export default function App() {

  const [index, setIndex] = useState(2)

  console.log(state);
  

  function incrementIndex() {
    setIndex(index < state.length -1 ? index + 1 : index)
  }

  function decrementIndex() {
    setIndex(index > 0 ? index - 1 : index)
  }

  return (
    <Provider store={store}>
      <div>
        <button onClick={decrementIndex}>◀</button>
        <button onClick={incrementIndex}>▶</button>
        <Meme id={index}/> 
        {/* <List /> */}
      </div>
    </Provider>
  )
}