import React, { useState } from 'react'
import {useHttp} from '../hooks/http.hook'

export const AddPage = () => {

    const [author, setAuthor] = useState('')

    const { request } = useHttp()

    const pressHandler = async event => {
        if (event.key === 'Enter') {
            try {
                const data = await request('/api/meme/add', 'POST', {author: author})
                console.log(data);
                
            } catch(e) {

            }
        }
    }

    return (
        <div className="row">
            <div className="input-field col s6">
                <input 
                     
                    id="author" 
                    type="text" 
                    className="validate"
                    onChange={e => setAuthor(e.target.value)}
                    onKeyPress={pressHandler}
                />
                <label className="active" htmlFor="author">First Name</label>
            </div>
        </div>
    )
}

