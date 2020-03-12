import React from "react";
import "../Styles/TodoForm.css";


class TodoForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            taskName: ""
        };
    }

    handleChange = e =>{
        this.setState({ taskName: e.target.value})
    }

    handleAddTask = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName);
    };
    
    render(){
        console.log("Rendering this form")
        
        return(
            <div className = "form-wrapper">
            <form className = "form-master"
                onSubmit={this.handleAddTask}>
                <input className = "form-input"
                placeholder = "Your next todo item goes here..."
                type = "text"
                name = "task"
                value = {this.state.taskName}
                onChange = {this.handleChange}
                />
                <button>Add Task</button>



            </form>
            </div>

        )


    }





}

export default TodoForm;