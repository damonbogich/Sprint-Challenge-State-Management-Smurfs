export const initialState =  {
    smurfs: [
        {
            name: "Brainey",
            age: 200,
            height: "5cm",
            id: 0
    
        }
    ] }

export const addSmurfReducer = (state = initialState, action) => {
    switch(action.type) {
        default: 
            return state;
    }
}