import React, { useState } from 'react'
import {useHttp} from '../hooks/http.hook'
import axios from 'axios'

export const ShowPage = () => {
    const [meme, setMeme] = useState('')

    const getUser = async () => {
        try {
          const response = await axios.get('/api/meme/show', {
            params: {
                id: 8
              }
          });
          console.log(response);
        } catch (error) {
          console.error(error);
        }
      }

      return (
        <button type="button" className="btn btn-success btn-block" onClick={getUser}>Upload</button> 
      )

      
}