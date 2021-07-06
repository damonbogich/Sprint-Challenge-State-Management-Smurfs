import axios from "axios";

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_SMURF_START'});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({type: 'FETCHING_SMURF_SUCCESS', payload: res.data})
        })
        .catch(err => console.log(err))
    }
};


export const addSmurf = (name, age, height) => {
    return dispatch => {
        dispatch({type: 'ADD_SMURF'});
        axios.post('http://localhost:3333/smurfs', {name, age, height})
        .then(res => {
            console.log(res)
            dispatch({type: "ADD_SMURF", payload: {name, age, height }})
        })
        .catch(err => console.log(err.response))
        
    }
}