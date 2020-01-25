export const initialState =  {
smurfs: [
    {
        name: "Brainey",
        age: 200,
        height: "5cm",
        id: 0

    }
] }

export const FormReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type) {
        case "ADD_SMURF":
            return{
                 ...initialState,
                 smurfs: [
                     ...state.smurfs,
                     {name: action.payload.name , age: action.payload.age , height: action.payload.height , id: action.payload.id }
                 ]
            }
        default: 
        return state;
    }

}



