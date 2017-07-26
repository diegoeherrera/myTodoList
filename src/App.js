import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput'
import TodoRenderTasks from './components/TodoRenderTasks'

class App extends Component {
  constructor(){
    super()
   // this.addTodo = this.addTodo.bind(this);
    this.state={
      todos:[
        {
              id:"",
              title:"",
              description:"",
              doDate:"",
              isComplete:false
        }
      ]
    }

  }

  addTodo (newTask){
  console.log("estado en console log: "+{...this.state})
   if(newTask){


      let task = {
              id:"",
              title:newTask.title,
              description:newTask.descripcion,
              doDate:newTask.todoDate.toString(),
              isComplete:false
      }
            

        this.state.todos.push(task)

        this.setState(
          {
          todos:[...this.state.todos]
          }
      )

   } 
    else{
     let newTask={}
   }

   console.log("newtask: "+newTask)

    //console.log("desde ADDTODO APP Cargaste: ", newTask)

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        
        <TodoInput addTodo={this.addTodo.bind(this)}/>
        <TodoRenderTasks data={this.state.todos}/>
      </div>
    );
  }
}

export default App;
