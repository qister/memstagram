import React from 'react'
import Context from './context'

export default function Memes({id}) {

  
    return (
      <div className='meme'>
        <img className='big' src={`/memes/${id}.jpg`} alt={""}/>
      </div>
    )
  }