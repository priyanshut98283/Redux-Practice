import React from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function CakeContainer(props) {
  return (
    <div>
        <h2>Number of Cakes- {props.numOfCakes}</h2>
        <button onClick={props.buyCake}>Buy cake</button>
    </div>
  )
}

// In redux docs there are selectors just like actions.js and reducers that returns some state information
// Selectors not covered here as our example has small data...

const mapStateToProps=state=>{
    return {
           // this is a way of adding multiple useReducers...defined in root reducer...
        // otherwise we can directly access state.numOfCakes
        numOfCakes: state.cake.numOfCakes
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyCake:()=>dispatch(buyCake())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(CakeContainer)