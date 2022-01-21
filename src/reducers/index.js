import { FETCH_DOG, FETCH_DOGSUCCESS, FETCH_DOGFAIL } from "../actions";

const intialState = {
    dog: null,
    isFetching: false,
    error: ''
}

export const reducer = (state = intialState, action) => {
    switch(action.type){
        case FETCH_DOG:
            return {
                ...state,
                dog: null,
                isFetching: true,
                error: ''
            };
        case FETCH_DOGFAIL:
            return {
                ...state,
                dog: null,
                isFetching: false,
                error: action.data
            };
        case FETCH_DOGSUCCESS:
            return {
                ...state,
                dog: action.data.message,
                isFetching: false,
                error: ''
            }  
        default:
            return state          
    }
}