import {React, useState} from 'react'
import { buyCake } from '../redux'
import { connect } from 'react-redux'

function NewCakeContainer(props) {
    const [number,setNumber]=useState(1)
  return (
    <div>
        <h2>Number of Cakes- {props.numOfCakes}</h2>
        <input type='text' value={number} onChange={e=>setNumber(e.target.value)} style={{boxShadow:'7px 7px 10px dodgerblue',padding:'10px',fontSize:'larger',color:'tomato'}}></input><br/><br/>
        <button onClick={()=>props.buyCake(number)} style={{boxShadow:'7px 7px 10px dodgerblue',padding:'10px',fontSize:'larger',color:'blueviolet',backgroundColor:'aquamarine',cursor: 'pointer'}}>Buy {number} cake</button>
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
        buyCake:number=>dispatch(buyCake(number))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(NewCakeContainer)