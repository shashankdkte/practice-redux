import { legacy_createStore as createStore,applyMiddleware } from "redux"
import axios from "axios"
import thunk from "redux-thunk"
//Aysynchronous Actions
// state = {
//     loading:true,
//     data:[],
//     error:''
// }

//ACTIONS
// FETCH_USERS_REQUEST
// FETCH_USERS_SUCCESS
// FETCH_USERS_FAILURE

//REDUCERS
/**
 * case FETCH_USERS_REQUEST:
 * loading:true
 * 
 * case FETCH_USERS_SUCCESS:
 * loading:false,
 * users:data{}
 * 
 * case FETCH_USERS_FAILURE
 * loading:false
 * error
 */

const FETCH_USERS_REQUEST ='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE ='FETCH_USERS_FAILURE'

const initialState = {
        loading:true,
    data:[],
    error:''
}
 
function fetchUsersRequest(){
    return{
        type:FETCH_USERS_REQUEST
    }
}
function fetchUsersSuccess(users){
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

function fetchUsersFailure(error){
    return {
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}

const reducer = (state=initialState,action)=>{
    switch(action.type)
    {
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
            case FETCH_USERS_SUCCESS:
                return {
                    ...state,
                    loading:false,
                    error:'',
                    data:action.payload
                }
            case FETCH_USERS_FAILURE:
                return {
                    ...state,
                    loading:false,
                    data:[],
                    error:action.payload
                }    
        default:
            return state;
    }
}

function fetchUsers(){
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response =>{
            const data = response.data.map(user => user.id)
            dispatch(fetchUsersSuccess(data))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
const store = createStore(reducer,applyMiddleware(thunk.default));
store.subscribe(()=> {console.log(store.getState())});
store.dispatch(fetchUsers())