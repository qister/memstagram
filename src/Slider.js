import React from 'react'
import Memes from './Memes'


export default function Slider({id, liked}) {

    return (
        <div>
            <Memes id={id} liked={liked}/>
            {/* {liked ? <p>Like</p> : <p>Dislike</p>} */}
        </div>
    )
}