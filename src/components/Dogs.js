import React, {useEffect} from "react";
import {connect} from 'react-redux'
import Button from '@mui/material/Button'
import { getDog } from "../actions";

const Dogs = ({dog, isFetching, error, dispatch}) => {

useEffect(() => {
    dispatch(getDog());
}, [])

if (error) {
    return <h2>There has been an error :(</h2>
}

if(isFetching){
    return <h2>Getting ya dawg.</h2>
}

const handleClick = () => {
    dispatch(getDog());
}

return (
<div>
    <img src={dog}/>
    <Button variant="contained" onClick={handleClick} className="btn">New Dog</Button>
    </div>
)
}

const mapStateToProps = state => {
    console.log("this is", state)
    return {
        dog: state.dog,
        isFetching: state.isFetching,
        error: state.error
    };
};

export default connect(mapStateToProps)(Dogs)