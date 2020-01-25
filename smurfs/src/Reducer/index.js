//reducer index.js
//data is slightly diffent than guided project because it's in an array

// export const initialState = {
//     isLoading: false,
//     smurfData: [],
//     error: ''
    
// }



// export const reducer = (state = initialState, action) => {
//     switch (action.type) {
//     case "FETCHING_SMURF_START":
//       return {
//         ...state,
//         isLoading: true
//       };
//       case "FETCHING_SMURF_SUCCESS":
//           return {
//               ...state,
//               isLoading: false,
//               smurfData: action.payload
              
//           };
          
    
//       default:
//         return state;
//     }
//   };

//above this is original

import {smurfReducer} from './SmurfReducer';
import {FormReducer} from './FormReducer';
import { combineReducers } from 'redux';

export default combineReducers({
    FormReducer,
    smurfReducer
});
