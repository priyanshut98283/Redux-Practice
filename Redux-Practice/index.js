const redux= require('redux')
const reduxLogger=require('redux-logger')
const createStore=redux.createStore
// console.log("YO");
// Run code using command "node index" that is file name...
//With Multiple reducers->
const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

// using logger middleware...
// const reduxLogger=require('redux-logger')
const applyMiddleware=redux.applyMiddleware
const logger=reduxLogger.createLogger()

// {
//     type: BUY_CAKE
//     info: 'First redux action'
// }

// Three redux components- Store, Action and Reducer

function buycake(){
    return {
        type: BUY_CAKE ,
        info: 'First redux action',
    }
}

function buyicecream(){
    return {
        type: BUY_ICECREAM ,
        // info: 'First redux action',
    }
}

// (previousState, action)=> (newState)

const initialState={
    numOfCakes: 10,
    numOfIceCreams: 20
}

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }

        default: return state
    }
}

const store= createStore(reducer,applyMiddleware(logger))
console.log('Initial State', store.getState())
//without logger->
// const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()))
//using logger->
const unsubscribe=store.subscribe(()=>{})
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()

/* 
Using multiple reducers in seperate states...

const redux= require('redux')
const createStore=redux.createStore
const combineReducers=redux.combineReducers

const BUY_CAKE='BUY_CAKE';
const BUY_ICECREAM='BUY_ICECREAM';

function buycake(){
    return {
        type: BUY_CAKE ,
    }
}

function buyicecream(){
    return {
        type: BUY_ICECREAM ,
    }
}

const initialCakeState={
    numOfCakes: 10
}
const initialIcecreamState={
    numOfIceCreams: 20
}

const cakeReducer=(state=initialCakeState,action)=>{
    switch(action.type){
        case BUY_CAKE:return{
            ...state,
            numOfCakes: state.numOfCakes-1
        }
        default: return state
    }
}
const iceCreamReducer=(state=initialIcecreamState,action)=>{
    switch(action.type){
        case BUY_ICECREAM:return{
            ...state,
            numOfIceCreams: state.numOfIceCreams-1
        }

        default: return state
    }
}

const rootReducer=combineReducers({
    cake:cakeReducer,
    iceCream: iceCreamReducer
})

const store= createStore(rootReducer)
console.log('Initial State', store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buycake())
store.dispatch(buyicecream())
store.dispatch(buyicecream())
unsubscribe()

 

*/

/* 
project setup->

npm init --yes (For package.json file) 
npm install redux 
npm install redux-logger (middleware for logging)
(Documentation at https://www.npmjs.com/package/redux-logger)

*/