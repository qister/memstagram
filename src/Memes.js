import React, { useContext } from "react"
import Context from './context'

export default function Memes({id}) {

  const {like} = useContext(Context)
  
  return (
    <div className='meme' onDoubleClick={() => like(id)}>
      <img className='big' src={`/memes/${id}.jpg`} alt={""} />
    </div>
  )
}