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
            [e.target.name]: value
        });
    }
      

    return (
        <div>
            <input
            type = "text"
            name="newName"
            value={newSmurf.name}
            onChange={handleChanges}
            placeholder="Name"
            />
            <input
            type = "text"
            name="newAge"
            value={newSmurf.age}
            onChange={handleChanges}
            placeholder="Age"
            />
            <input
            type = "text"
            name="newHeight"
            value={newSmurf.height}
            onChange={handleChanges}
            placeholder="Height"
            />
            <button onClick= {() => props.addSmurf(newSmurf)}>Submit</button>
        
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