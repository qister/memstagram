const axios = require('axios')

const getData = async () => {

    const response = await setTimeout(
        () => {
            console.log('полторы секунды');
        }
    , 1500)
    
    return response
}

getData()
    .then(reponse => console.log(response))

// console.log(getData())