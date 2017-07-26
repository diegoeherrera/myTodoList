import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';



class TodoInput extends React.Component {

   constructor(props) {
        super(props);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.sendNewTask = this.sendNewTask.bind(this);
        this.handleDateSelection = this.handleDateSelection.bind(this);
        this.clearFields = this.clearFields.bind(this);
        this.state = (
            {
                newTaskTitle:"",
                newTaskDescription:"",
                newTasktodoDate:"",
                startDate: moment()

            }
          
        )
  }
    
  /*Manage Title & Description Input Update*/

    handleTitleChange(e){

        this.setState({newTaskTitle:e.target.value})
        console.log("ingresando Titulo: "+this.state.newTaskTitle)

    }

    handleDescriptionChange(e){
         
        this.setState({newTaskDescription:e.target.value})
        console.log("ingresando Descripcion: "+this.state.newTaskDescription)
    }

    handleTitleSubmit(){
        console.log("You have added the following task: "+"Task title:"+this.status.newTaskTitle+"|| Task Description: "+this.status.newTaskDescription)
    }


    handleDateSelection(date){
      let todoDateSelected = new Date(date);

        this.setState(
            {
                newTasktodoDate: todoDateSelected
            }
        )

        console.log("seteada fecha: "+this.state.newTasktodoDate)
        
    }

    /************************************/

    /*Send New Input*/
    sendNewTask(){

        console.log("new task: "+this.state.newTaskTitle+"new description: "+this.state.newTaskDescription+"new description: "+this.state.newTasktodoDate)

      let newTask = {
          title:this.state.newTaskTitle,
          descripcion:this.state.newTaskDescription,
          todoDate:this.state.newTasktodoDate
      }

      this.props.addTodo(newTask)

      this.clearFields();
    }

    clearFields(){

        this.setState({
            todos:[]
        })

    }
    /***************/

     render() {
        return (
        <div>
            <h2>Insert your Task Here</h2>
            <div>                
                <span>Title:</span>
                 <input onChange={this.handleTitleChange}/>
            </div>
            <div>                
                <span>Description:</span>
                 <input onChange={this.handleDescriptionChange}/>
            </div>
            <div>
                <DatePicker dateFormat="YYYY/MM/DD" selected={this.state.startDate} onSelect={this.handleDateSelection} />        
            </div>
            <div>
                 <button onClick={this.sendNewTask}>Add Task</button>
            </div>         
        </div>
    );
  }


}

export default TodoInput;