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

// export const addSmurf = name, age, height, id => {
//     return dispatch => {
//         dispatch({type: 'ADD_SMURF'})
//         axios
//         .post('http://localhost:3333/smurfs')
//         .then(response => {
//             console.log("Great success", response);
//             dispatch({type: "ADD_SMURF", payload: name, age, height, id});
//         })
//     }
// }

export const addSmurf = (name, age, height, id )=> {
    return dispatch => {
        dispatch({type: "ADD_SMURF"});
        axios
        .post('http://localhost:3333/smurfs')
        .then(response => {
            console.log(response)
            dispatch({type: "ADD_SMURF", payload: {name, age, height, id}})
        })
    }
}




