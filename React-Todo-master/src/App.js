import React from 'react';
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";
import "./Styles/App.css";


const StandardToDoList = [
  {
    task: `Organize Garage`,
    id: 1,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id:2,
    completed:false
  },
  {
    task: 'Get internatiknown',
    id:3,
    completed:false
  },
  {
    task: "Origami",
    id:4,
    completed:false
  },
  {
    task:"smang it",
    id:5,
    completed:false
  }

];

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor(){
    super();
    this.state = {
        todoItems : StandardToDoList
    };
  }
  
  toggleDone = itemId => {
    console.log("bk:index.js App: toggleDone: itemID", itemId);
    this.setState({
      todoItems : this.state.todoItems.map(item=>{
        if(item.id === itemId) {
          return{
            ...item,
            completed: !item.completed
          };
        }
        return item;
      })
    });
  };

  addTask = taskName => {
    this.setState({
      todoItems: [
        ...this.state.todoItems,
        {
          task: taskName,
          completed: false,
          id: Date.now()
          
        }
      ]
    });
  };

  clearDone = () => {
    console.log("App: clearDone");
    this.setState({
      todoItems: this.state.todoItems.filter(task =>{
        return !task.completed;
      })
    });
  }


  
  render() {
      console.log()
    return (


      <div className = "app-body">
        <div className = "top-header">
          <p>Todo List</p>
        </div>
        <div className = "form-holder">
        <TodoForm addTask = {this.addTask}/>
        </div>
        <TodoList
          items = {this.state.todoItems}
          toggleDone = {this.toggleDone}
          clearDone = {this.clearDone} 
        />

        
      </div>
    );
   }
}

export default App;
