
import React ,{useContext} from 'react'
import {UserContext, EstateContext} from '../App'

function Context2() {

    // useContext consume the value of Context
    const user = useContext(UserContext);
    const estate = useContext(EstateContext);
  return (
    <div>
        <h1>My name is {user} and live in an estate called {estate}</h1>
    </div>
  )
}

export default Context2;