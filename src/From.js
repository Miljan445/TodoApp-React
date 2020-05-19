import React, { Component } from 'react';

class Form extends Component {
    state = {
        chore:""
    }
    changeState = () =>{
        this.setState({
            chore:document.getElementById("chore").value
        })
    }
    handleChange = (e)=>{
        e.preventDefault();
        document.getElementById("chore").value = "";
        let state = this.state.chore;

        if(state.length === 0){
            alert("Please enter a todo!")
            }
        else{
            this.props.updateState(this.state)
        }

    }
    render(){
        const chore = this.props.chores;
        let check = ()=>{
            if(chore.length === 0){
                return(
                    <div>
                        <h1>Congradulations, you dont have any chores left!</h1>
                    </div>
                )
            }
        }
        let newChore = chore.map((item)=>{
            return(
                <ul key={item.key}>
                    <li onClick={()=>{this.props.removeChore(item.key)}}>{item.chore}</li>
                </ul>
            )
        })
        return(
            <div>
                <form onSubmit={this.handleChange}>
                    <input type="text" id="chore" placeholder="enter a chore..." onChange ={this.changeState}/>
                    <button>Add chore</button>                   
            </form>
            <div className="output" onClick={this.delete}>
                {newChore} 
                {check()}
            </div>
            </div>
        )
    }
}
export default Form;