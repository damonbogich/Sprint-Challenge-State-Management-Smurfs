import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../Action/index';

import Smurf from './Smurf';

const Smurfs = props => {
    console.log(props);
    return(
        <div>
            <Smurf
            smurfData = {props.smurfData}
            />
            <button onClick = {props.fetchSmurf}>Grab A Smurf</button>
            <h2>{props.name}</h2>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        isLoading: state.isLoading,
        smurfData: state.smurfData,
        error: state.errors
    }
}

export default connect(
    mapStateToProps,
    {fetchSmurf}
)(Smurfs)