import React from "react";
import "../Styles/Todo.css";

const Todo = props =>{
    
    return(
        <div className = "todo-holder">
        <div className ={`todo-item${props.taskItem.completed ? " done" : ""}`}
        
            onClick = {e => props.toggleDone(props.taskItem.id )}
        >

        <p>{props.taskItem.task}</p>
        

        </div>
        </div>

    )

}

export default Todo;