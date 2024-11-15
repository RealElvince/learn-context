import React, {createContext}from 'react';
import './App.css';
import Context from './components/Context';

// create userContext
export const UserContext = React.createContext()
export const EstateContext = React.createContext()



function App() {
  return (
    <div className="App">
     <UserContext.Provider value={"Elvooooo"}>
        <EstateContext.Provider value={"Kahawa Wendani"}>
           <Context/>
        </EstateContext.Provider>
     </UserContext.Provider>
    </div>
  );
}

export default App;
