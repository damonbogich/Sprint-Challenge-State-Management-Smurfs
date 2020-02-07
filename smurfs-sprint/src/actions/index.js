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