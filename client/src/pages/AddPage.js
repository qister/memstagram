import React, { useState } from 'react'
import {useHttp} from '../hooks/http.hook'
import axios from 'axios'

export const AddPage = () => {

    const [author, setAuthor] = useState('')

    // const { request, dataRequest } = useHttp()

    // const pressHandler = async event => {
    //     if (event.key === 'Enter') {
    //         try {
    //             const data = await request('/api/meme/add', 'POST', {author: author})
    //             console.log(data);
                
    //         } catch(e) {

    //         }
    //     }
    // }

    // const submitHandler = async event => {
    //     event.preventDefault()

    //     const data = new FormData()
  
    //     console.log(data);
        

    //     try {
    //         let response = await fetch('/api/meme/addpic', {
    //             method: 'POST',
    //             body: data
    //         });
        
    //         let result = await response.json();
        
    //         console.log(result.message);
    //     }   catch(e) {
    //         console.log(e.message);
            
    //     }
    // }
    const [selectedFile, setSelectedFile] = useState(null)
    const [description, setDescription] = useState(null)
    
    const [loaded, setLoaded] = useState(null)

    const onChangeHandler = event => {
        setSelectedFile(event.target.files[0])
        setLoaded(null)
    }

    const onClickHandler = async () => {
        const data = new FormData()
        data.append('file', selectedFile)
        data.append('author', author)
        data.append('description', description)
        console.log(data);
        let response = await axios.post("/api/meme/addpic", data, { 
            // receive two    parameter endpoint url ,form data
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
        console.log(response);
        
    }

    return (
        <div className="row" >
        <input
            id="author" 
            type="text" 
            className="validate"
            placeholder="author"
            onChange={e => setAuthor(e.target.value)}
        />
        <input
            id="description" 
            type="text" 
            className="validate"
            placeholder="description"
            onChange={e => setDescription(e.target.value)}
        />

        <input type="file" name="file" onChange={onChangeHandler}/>
        <button type="button" className="btn btn-success btn-block" onClick={onClickHandler}>Upload</button> 

        {/* <form className="col s12" onSubmit={submitHandler} id="formElem" encType="multipart/form-data">
            <div className="row">
                <div className="input-field col s6">
                <input
                    id="author" 
                    type="text" 
                    className="validate"
                    onChange={e => setAuthor(e.target.value)}
                    onKeyPress={pressHandler}
                />
                <label className="active" htmlFor="author">Meme author</label>
                </div>
            </div>
            <div className="file-field input-field">
                <div className="btn">
                    <span>File</span>
                    <input type="file"/>
                </div>
                <div className="file-path-wrapper">
                    <input className="file-path validate" type="text"/>
                </div>
            </div>
            <button 
                className="btn waves-effect waves-light" 
                type="submit" 
                name="action"
                onClick={submitHandler}
                >Submit
            </button>
        </form> */}
        </div>
    )
}

