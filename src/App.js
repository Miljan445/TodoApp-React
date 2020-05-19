import React, { Component } from 'react';
import Form from "./From.js"
import axios from "axios"
class App extends Component {
  state={
    todos : []
  }
  componentDidMount(){
    fetch("http://www.omdbapi.com/?t=batman&apikey=6c2f984f")
    .then((res)=>res.json())
    .then(data=>console.log(data.Title))
  }
//Dodavanje itema
  updateState = (parametar)=>{
    parametar.key = Math.random()*10;
    let clonedArr = [...this.state.todos,parametar];
    this.setState({
      todos:clonedArr
    })
  }
//Brisanje itema
  removeChore = (parametar) =>{
    let currentArr = this.state.todos;
    let newArr = currentArr.filter((item)=>{
      if(parametar != item.key){
        return true
      }
    })
    this.setState({
      todos:newArr
    })
  }
  render(){
    return (
      <div className="App">
       <h1>Todo list App</h1>
       <h3>Enter a chore down here</h3>
       <Form chores = {this.state.todos} updateState = {this.updateState} removeChore = {this.removeChore} />
      </div>
    )
  }
}

export default App;
