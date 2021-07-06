import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addSmurf} from '../actions';

const AddSmurfForm = props => {
    console.log('form props', props);
    const [newSmurf, setNewSmurf] = useState({
        name: '',
        age: '',
        height: ''
    });

    // handleChange = e => {
    //     [e.target.setNewSmurf] = e.target.value
    // }
    function handleChanges(e) {
        const value = e.target.value;
        setNewSmurf({
            ...newSmurf,
            [e.target.name]: value
        });
        console.log('this is new state', newSmurf)
    }
      

    return (
        <div>
            <input
            type = "text"
            name="name"
            value={newSmurf.name}
            onChange={handleChanges}
            placeholder="Name"
            />
            <input
            type = "text"
            name="age"
            value={newSmurf.age}
            onChange={handleChanges}
            placeholder="Age"
            />
            <input
            type = "text"
            name="height"
            value={newSmurf.height}
            onChange={handleChanges}
            placeholder="Height"
            />
            <button onClick= {() => props.addSmurf(newSmurf.name, newSmurf.age, newSmurf.height)}>Submit</button>
        
        </div>
)
    
}

const mapStateToProps = state => {
    return {
        smurfs: state.addSmurfReducer.smurfs
    }
}

export default connect(
    mapStateToProps,
    {addSmurf}
)(AddSmurfForm);