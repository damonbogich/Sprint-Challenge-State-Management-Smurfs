import axios from 'axios';

export const fetchSmurf = () => {
    return dispatch => {
        dispatch({ type: 'FETCHING_SMURF_START' });
        axios
            .get('http://localhost:3333/smurfs')
            .then(response => {
                console.log(response.data[0]);
                dispatch({ type: 'FETCHING_SMURF_SUCCESS', payload: response.data[0] });
            })
        
    };
};