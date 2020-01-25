//reducer index.js
//data is slightly diffent than guided project because it's in an array
// this was empty originally

export const initialState = {
    isLoading: false,
    smurfData: [],
    error: ''
    
}



export const smurfReducer = (state = initialState, action) => {
  // console.log('smurfaction', action);
    switch (action.type) {
    case "FETCHING_SMURF_START":
      return {
        ...state,
        isLoading: true
      };
      case "FETCHING_SMURF_SUCCESS":
          return {
              ...state,
              isLoading: false,
              smurfData: action.payload
              
          };
          
    
      default:
        return state;
    }
  };