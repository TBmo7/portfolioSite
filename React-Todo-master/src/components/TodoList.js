// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from "react";
import Todo from "./Todo";
import "../Styles/TodoList.css"


const TodoList = props =>{

    return(
        <div className = "todo-list">
            {props.items.map(item=>(
                <Todo
                key = {item.id}
                taskItem = {item}
                toggleDone = {props.toggleDone}
                />
            ))}

            <button onClick = {props.clearDone}>Done!</button>
        </div>
    )


}

export default TodoList;


