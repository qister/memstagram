import React, { useState } from 'react'
import like from '../Store/Meme/actions.mjs'
import Redux from 'redux'

export default function Meme_(props) {

    
    
    let {list, id} = props
    let {tapLike} = props
    console.log(list.find(meme => meme.id === id).liked);
    
    const isCurrentMemeLiked = () => {
        return list.find(meme => meme.id === id).liked
    }

    // const {like} = useContext(Context)

    // const composeLike = () => {
    //   store.dispatch(like(id))        
    // }
    

    const likeButtonText = () => {
        return isCurrentMemeLiked() ? '🧡' : '🖤'
    }

    const handleClick = () => {
        tapLike(id)
    } 

    // const like = () => {
    //     return list.map(meme => {
    //         if (meme.id === id) {
    //             meme.liked = !meme.liked
    //             console.log(meme);
                
    //         }
    //     })
    // }

    return (
        <React.Fragment>
            <div className='meme'>
                <img className='big' src={`/memes/${id}.jpg`} alt={""} />
            </div>
            <button 
                onClick={handleClick}
                className='like'
                >
                {likeButtonText()}
            </button>
        </React.Fragment>
    )
  }