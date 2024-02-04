const redux= require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware= require('redux-thunk').default
const axios= require('axios')

const reduxLogger=require('redux-logger')
const logger=reduxLogger.createLogger()

const initialState={
    loading: false,
    users: [],
    error: ''
}

const FETCH_USERS_REQUEST='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE='FETCH_USERS_FAILURE'

const fetchUsersRequest=()=>{
    return{
        type: FETCH_USERS_REQUEST
    }
}

const fetchUsersSuccess=(users)=>{
    return{
        type: FETCH_USERS_SUCCESS,
        payload: users
    }
}

const fetchUsersFailure=(error)=>{
    return{
        type: FETCH_USERS_FAILURE,
        payload: error
    }
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading: true,
            }
        case FETCH_USERS_SUCCESS:
            return{
                loading: false,
                users: action.payload,
                error: ''
            }

        case FETCH_USERS_FAILURE:
            return{
                loading: false,
                users: [],
                error: action.payload
            }
        default: return state
    }
}

// Using jsonplaceholder for api data -> https://jsonplaceholder.typicode.com

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response=>{
            const users=response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}

const store= createStore(reducer,applyMiddleware(thunkMiddleware,logger))
// const store= createStore(reducer,applyMiddleware(thunkMiddleware))
// console.log('Initial State', store.getState())
// const unsubscribe=store.subscribe(()=>{})
// store.dispatch(fetchUsers())
// unsubscribe()
store.subscribe(()=>{})
store.dispatch(fetchUsers())


// Async action creators->

/* 
axios - requests to an api end point

redux-thunk - a middleware which define async action creators 

Installation->
npm install axios redux-thunk
*/