import axios from 'axios'

const getData = async () => {

    const response = await axios.get('/api/meme/show', {
    params: {
        id: id
        }
    })
    return response
}
console.log(getData())