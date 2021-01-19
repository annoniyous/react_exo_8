import './App.css';


import React, { Component } from 'react'

export class App extends Component {
state = {
  nbr : 1
}

render() {
    console.log(this.state.nbr);
    return (

      <div>
        <h1 onMouseOver={(e) =>{console.log(e.target.innerHTML)}}>Mon titre</h1>
        <button onClick={()=>{
          console.log("Bonjour")
        }}>mon btn</button>

        <button onCopy={() =>{
          console.log("Vous pouvez pas copier")
        }}>salut</button>

        <button onDoubleClick={() =>{
          alert("Bien Bravo")
        }}>salut</button>

        
      </div>
    )
  }
}




export default App;
