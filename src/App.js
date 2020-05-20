import React, { useState } from 'react';
import './App.css';
import { Context } from './context.js';
import Slider from './Slider';
import './index.css';

// const memes = [1,2,3,4,5]

const memes = [
  {
    id: 1,
    liked: false,
  },
  {
    id: 2,
    liked: false,
  },
  {
    id: 3,
    liked: false,
  },
  {
    id: 4,
    liked: false,
  },
  {
    id: 5,
    liked: false,
  },
]

function App() {

  
  const [index, setIndex] = useState(2)
  const [localMemes, setLocalMemes] = useState(memes)
  
  function incrementIndex() {
    setIndex(i => i + 1)
  }

  function decrementIndex() {
    setIndex(i => i - 1)
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

  function likeButtonColor() {
    return localMemes.find(meme => meme.id === index).liked ? 'red' : 'black'
  }

  function likeButtonText() {
    return localMemes.find(meme => meme.id === index).liked ? '🧡' : '🖤'
  }

  return (
    <Context.Provider value={{like}}>
      <div> 
        <button onClick={decrementIndex}>предыдущий</button>
        <button onClick={incrementIndex}>следующий</button>
        <Slider 
          id={index}
        />
        <button 
          onClick={() => like(index)}
          style={{color: likeButtonColor()}}
          className='like'
        >
          {likeButtonText()}
        </button>
      </div>
    </Context.Provider>
  );
}

export default App;
