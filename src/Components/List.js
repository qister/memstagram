import React from 'react'

export default function List_({ list }) {
    return (
        list.map(meme => (
        <div className='meme'>
            <img className='big' src={`/memes/${meme.id}.jpg`} />
        </div>
        ))
    )
}