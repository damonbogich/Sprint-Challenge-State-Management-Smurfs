import React, {useState} from 'react';
import { connect } from 'react-redux';
import {addSmurf} from '../Action/index';
//look at form and set up on state to try and update state


const SmurfForm = props => {
    console.log("formprops", props);
    const [newSmurf, setNewSmurf] = useState("");
    // const [newSmurf, setNewSmurf] = useState("");
    

    const handleChanges = e => {
        setNewSmurf(e.target.value);
      };
    
    return (
        <div>
            <input
            type = "text"
            name="newName"
            // value={newSmurf}
            onChange={handleChanges}
            placeholder="Name"
            />
            <input
            type = "text"
            name="newAge"
            // value={newSmurf}
            onChange={handleChanges}
            placeholder="Age"
            />
            <input
            type = "text"
            name="newHeight"
            // value={newSmurf}
            onChange={handleChanges}
            placeholder="Height"
            />
            <button onClick = {() => props.addSmurf()}>Submit</button>
            
        </div>
    )
}


const mapStateToProps = state => {
    return {
        name: state.FormReducer.name,
        age: state.FormReducer.age,
        height: state.FormReducer.height
    }
}

// const mapStateToProps = state => {[
//     return {
//         name: state.FormReducer.name,
//         age: state.FormReducer.age,
//         height: state.FormReducer.height
//     }
// ]}

export default connect(
    mapStateToProps,
    {addSmurf}
)(SmurfForm)