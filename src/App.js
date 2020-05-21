import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import './index.css';
import Memes from './Memes';
import Modal from './Modal/Modal'
import Context from './context'

// const memes = [1,2,3,4,5]

const memes = [
  {
    id: 0,
    liked: false,
    author: 'Elon',
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

function App() {

  
  const [index, setIndex] = useState(2)
  const [localMemes, setLocalMemes] = useState(memes)
  const [login, setLogin] = useState('guest')
  
  function incrementIndex() {
    setIndex(index < localMemes.length -1 ? index + 1 : index)
  }

  function decrementIndex() {
    setIndex(index > 0 ? index - 1 : index)
  }

  function like(id) {
    console.log(id);
    setLocalMemes(localMemes.map(meme => {
        if (meme.id === id) {
          meme.liked = !meme.liked
        }
        return meme
    }))
  }

  function likeButtonText() {
    return localMemes.find(meme => meme.id === index).liked ? '🧡' : '🖤'
  }

  function getAuthor() {
    return localMemes.find(meme => meme.id === index).author
  }

  return (
    <Context.Provider value={{like, setLogin}}>
      <div>
        <Modal/>
        <div>you are logged in as {login}</div>
        
        <button onClick={decrementIndex}>◀</button>
        <button onClick={incrementIndex}>▶</button>
        
        <Memes 
          id={index}
        />
        <div>Meme author: {getAuthor()}</div>
        <button 
          onClick={() => like(index)}
          className='like'
        >
          {likeButtonText()}
        </button>
      </div>
      </Context.Provider> 
  );
}

export default App;
