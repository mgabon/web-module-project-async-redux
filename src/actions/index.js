import axios from "axios";

export const FETCH_DOG = "FETCH_DOG";
export const FETCH_DOGSUCCESS = "FETCH_DOGSUCCESS";
export const FETCH_DOGFAIL = "FETCH_DOGFAIL";

export const getDog = () => {
    return (dispatch) => {
        dispatch({type:FETCH_DOG});
        axios.get('https://dog.ceo/api/breeds/image/random')
        .then(resp => {
            console.log(resp.data)
            dispatch({type:FETCH_DOGSUCCESS, data:resp.data})
        })
        .catch(err => {
            dispatch({type: FETCH_DOGFAIL, data:err})
        })
    }
}
