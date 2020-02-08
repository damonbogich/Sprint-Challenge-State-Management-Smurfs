import axios from "axios";

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({type: 'FETCHING_SMURF_START'});
        axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
            dispatch({type: 'FETCHING_SMURF_SUCCESS', payload: res.data[0]})
        })
        .catch(err => console.log(err))
    }
};


export const addSmurf = (Name, Age, Height) => {
    return dispatch => {
        dispatch({type: 'ADD_SMURF'});
        axios.post('http://localhost:3333/smurfs', {Name, Age, Height})
        .then(res => {
            console.log(res)
            dispatch({type: "ADD_SMURF", payload: {Name, Age, Height}})
        })
        .catch(err => console.log(err.response))
        
    }
}