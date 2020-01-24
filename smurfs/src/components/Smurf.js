import React from 'react';

const Smurf = props => {
    console.log(props);
    return(
        <div>
            <h2>From Smurf Component</h2>
            <p>Name: {props.smurfData.name}</p>
            <p>Age: {props.smurfData.age}</p>
            <p>Height: {props.smurfData.height}</p>
        </div>
    )
}

export default Smurf;