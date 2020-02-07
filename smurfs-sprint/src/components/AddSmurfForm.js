import React from 'react';
import {connect} from 'react-redux';

const AddSmurfForm = props => {
    return (
        <div>
            <h1>smurf form</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.name,
        age: state.age,
        height: state.height
    }
}

export default connect(
    mapStateToProps,
    {}
)(AddSmurfForm);