import React, { useState } from 'react'
import {useHttp} from '../hooks/http.hook'
import axios from 'axios'

export const ShowPage = () => {
    const [meme, setMeme] = useState('')
    const [imgUrl, setImgUrl] = useState('')

    const getUser = async () => {
        try {
          const response = await axios.get('/api/meme/show', {
            params: {
                id: 10
              }
          });
          console.log(response.data[0]);
          setImgUrl('http://localhost:5000/' + response.data[0].imgUrl.slice(7))
        } catch (error) {
          console.error(error);
        }
      }

      return (
        <React.Fragment>
          <button type="button" className="btn btn-success btn-block" onClick={getUser}>Upload</button> 
          <img src={imgUrl} alt="альтернативный текст" />
        </React.Fragment>
      )

      
}