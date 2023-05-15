import { legacy_createStore as createStore } from 'redux'
//ACTION 
const BUY_CAKE = 'BUY_CAKE'

//Action is function with type 
//The way your application can interact with the store
//Action Creator

function buyCake(){
    return{
    type: BUY_CAKE,
    info: "First redux action"
}
}

//Reducers specify how the application state changes 
//in response to action sent to the store
//(previousState,action)=>newState

const initialState ={
    numberOfCakes:10
}

const reducer = (state=initialState,action) =>{
    switch(action.type){
        case BUY_CAKE:
            return {
                ...state,
                numberOfCakes:state.numberOfCakes - 1
            }
            default:
                return state;
    }
}

//implementing redux store

// ONe store for entire application
/*Responsibilities
 Holds the application state
 Allow access to state via getState()
 Allow state to be updated via dispatch(action)
 Registers listeners via subscribe 
 Handles unregistering of listeners via function returned by subscribe
 */

 const store = createStore(reducer)
 console.log("Initial State",store.getState())  //initialState
 const unsubscribe = store.subscribe(()=>console.log("Updated State",store.getState()))
 store.dispatch(buyCake());
 store.dispatch(buyCake());
 store.dispatch(buyCake());

 unsubscribe()

 //Sell icecream
 // BUY_ICECREAM

