import React from 'react';

const Smurf = props => {
    return (
        <div>
            <h2>Smurf info:</h2>
            <h3>Name: {props.smurfData.name}</h3>
            <h3>Age: {props.smurfData.age} </h3>
            <h3>Height: {props.smurfData.height} </h3>
        </div>
    )
}

export default Smurf;