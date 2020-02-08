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
            return{
                 ...initialState,
                 smurfs: [
                     ...state.smurfs,
                     {name: action.payload , age: action.payload , height: action.payload }
                 ]
            }
        default: 
            return state;
    }
};