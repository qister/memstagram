import React, { useState } from 'react'

export default function Meme_(props) {

    const [index, setIndex] = useState(2) 

    let id = index
    
    let {list} = props
    let {tapLike, newMeme} = props

     

    function incrementIndex() {
      setIndex(index < list.length -1 ? index + 1 : index)
    }
  
    function decrementIndex() {
      setIndex(index > 0 ? index - 1 : index)
    }
    
    const currentMeme = list.find(meme => meme.id === id)

    // const isCurrentMemeLiked = () => {
    //     return currentMeme.liked
    // }

    // const {like} = useContext(Context)

    // const composeLike = () => {
    //   store.dispatch(like(id))        
    // }  

    const likeButtonText = () => {
        return currentMeme.liked ? '🧡' : '🖤'
    }

    // const like = () => {
    //     return list.map(meme => {
    //         if (meme.id === id) {
    //             meme.liked = !meme.liked
    //             console.log(meme);
                
    //         }
    //     })
    // }

    const bestMeme = {
        id: 5,
        liked: true,
        author: 'Best',
      } 

    return (
        <React.Fragment>
            <div className='top-panel'>
                <span className='top-element'>
                <button onClick={decrementIndex}>◀</button>
                <button onClick={incrementIndex}>▶</button>
                </span>
                <button className='top-element' onClick={() => newMeme(bestMeme)}>
                        add
                </button>
            </div>
            <div>
            <div className='author'>Meme author: {currentMeme.author}</div>
                
            </div>
            <div className='meme'>
                <img className='big' src={`/memes/${id}.jpg`} alt={""} />
            </div>
            <button 
                onClick={() => tapLike(id)}
                className='like'
                >
                {likeButtonText()}
            </button>
        </React.Fragment>
    )
  }