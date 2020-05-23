import { memesList } from '../memesList'

export const LOAD_MEME_START = 'LOAD_MEME_START'
export const LOAD_MEME_OK = 'LOAD_MEME_OK'
export const LOAD_MEME_FAIL = 'LOAD_MEME_FAIL'

const memeStart = () => {
    return {
        type: LOAD_MEME_START
    }
}

const memeOk = (data) => {
    return {
        type: LOAD_MEME_OK,
        payload: data
    }
}

const memeFail = (error) => {
    return {
        type: LOAD_MEME_FAIL,
        error: error
    }
}

export const loadMemeList = () => {
    return dispatch => {
        dispatch(memeStart())
        getMemeList()
            .then(data => dispatch(memeOk(data)))
            .catch(error => {
                dispatch(memeFail(error))
            })
    }
}

const getMemeList = () => {
    return new Promise(function(resolve, reject) {
        setTimeout(() => resolve(memesList), 2000)
        reject(new Error("Ошибка загрузки мемов!"))
    })
}



