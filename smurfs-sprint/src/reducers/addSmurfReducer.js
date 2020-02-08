export const initialState =  {
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            
    
        }
    ] }

export const addSmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        
        case "ADD_SMURF":
            console.log('action payload', action.payload)
            return{
                 ...initialState,
                 smurfs: [
                     ...state.smurfs,
                     action.payload
                 ]
            }
        default: 
            return state;
    }
};