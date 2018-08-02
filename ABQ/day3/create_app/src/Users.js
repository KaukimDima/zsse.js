import React, { Component } from 'react';
let cnt = 0;
function getCnt(){
    cnt = +cnt + 1;
    return cnt;
}
class Users extends Component {

    state = {
        users : [],
        id: []
    }

    addUsers = e => {
        const {id, word} = this.state;
        this.setState ({id : [...id, word]})
        console.log(this.state.id)

    }

    handleInput = e => {
        const {word} = this.state;
        this.setState({word : e.target.value})
    }


    getUsers = e => {
        const {id} = this.state;
       for (var i = 0; i<id.length; i ++){
        fetch('https://jsonplaceholder.typicode.com/todo/'+i)
        .then(response => response.json())
        .then(json =>  this.setState({ users : json}))
       }
        div.mystyl
    }

    // componentDidMount() { 
    //     fetch('https://jsonplaceholder.typicode.com/users/')
    //     .then(response => response.json())
    //     .then(json =>  this.setState({ users : json}))
    // }

    render(){
        const {id} = this.state;
       
        return (
            <div> 
                <div>
                <h1> Nazhmite chtoby poluchit vseh polzovatel </h1>
                <input type = "text" onChange = {this.handleInput}/>
                <button onClick = {this.addUsers}>
                Add
                </button>
                <button onClick = {this.getUsers}>
                Submit
                </button>
                </div>
                <ul>
                    {id.map(el => <input type = "text"/>)}
                </ul>
            </div>




        );



        
    }
}

export default Users;