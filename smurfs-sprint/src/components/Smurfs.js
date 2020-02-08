import React from 'react';
import {connect} from 'react-redux';
import {fetchSmurf} from '../actions';
import Loader from 'react-loader-spinner';

import Smurf from './Smurf';

const Smurfs = props => {
    return (
        <div>
            <h2>Smurfs Component</h2>
            <button onClick={props.fetchSmurf}>Get smurf</button>
            {!props.smurf && !props.isLoading && <h2>Fetch a smurf</h2>}
            {props.isLoading && (
                <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000} //3 secs
              />
            )}
            {props.smurf && !props.isLoading && <Smurf smurfData={props.smurf} />}
        </div>

    )
}

const mapStateToProps = state => {
    return {
    isLoading: state.fetchSmurfReducer.isLoading,
    smurf: state.fetchSmurfReducer.smurf,
    errors: state.fetchSmurfReducer.errors
    }
}

export default connect(
    mapStateToProps,
    {fetchSmurf}
)(Smurfs);