import React, { useState } from 'react';
import './App.css';
import Slider from './Slider';
import './index.css';
import Memes from './Memes';

// const memes = [1,2,3,4,5]

const memes = [
  {
    id: 0,
    liked: false,
  },
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
]

function App() {

  
  const [index, setIndex] = useState(2)
  const [localMemes, setLocalMemes] = useState(memes)
  
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

  // function likeButtonColor() {
  //   return localMemes.find(meme => meme.id === index).liked ? 'red' : 'black'
  // }

  function likeButtonText() {
    return localMemes.find(meme => meme.id === index).liked ? '🧡' : '🖤'
  }

  return (
      <div> 
        <button onClick={decrementIndex}>◀</button>
        <button onClick={incrementIndex}>▶</button>
        <Memes 
          id={index}
        />
        <button 
          onClick={() => like(index)}
          // style={{color: likeButtonColor()}}
          className='like'
        >
          {likeButtonText()}
        </button>
      </div>
  );
}

export default App;
