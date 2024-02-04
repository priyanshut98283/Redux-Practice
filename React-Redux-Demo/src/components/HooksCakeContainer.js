import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux'

function HooksCakeContainer() {
     // this is a way of adding multiple useReducers...defined in root reducer...
        // otherwise we can directly access state.numOfCakes
  const numOfCakes= useSelector(state=>state.cake.numOfCakes)
  const dispatch=useDispatch()
  return (
    <div>
        <h2>Number of Cakes using Hooks - {numOfCakes}</h2>
        <button onClick={()=>dispatch(buyCake())}>Buy cake</button>
    </div>
  )
}

export default HooksCakeContainer