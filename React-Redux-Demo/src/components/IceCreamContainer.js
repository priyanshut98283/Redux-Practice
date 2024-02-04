import React from 'react'
import { buyIceCream } from '../redux'
import { connect } from 'react-redux'

function IceCreamContainer(props) {
  return (
    <div>
        <h2>Number of Icecreams- {props.numOfIceCreams}</h2>
        <button onClick={props.buyIceCream}>Buy Icecreams</button>
    </div>
  )
}

// In redux docs there are selectors just like actions.js and reducers that returns some state information
// Selectors not covered here as our example has small data...

const mapStateToProps=state=>{
    return {
        // this is a way of adding multiple useReducers...defined in root reducer...
        // otherwise we can directly access state.numOfIceCreams
        numOfIceCreams: state.iceCream.numOfIceCreams
    }
}

const mapDispatchToProps=dispatch=>{
    return {
        buyIceCream:()=>dispatch(buyIceCream())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)