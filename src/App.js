import React from 'react';
import Todo from './components/TodoComponents/Todo';
import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  state= {
    tasks:[
      {
        id: 1,
        title: 'Morning Meditation',
        completed: false,
      }, 
      { id: 2,
        title: 'Study Course Work',
        completed: false,
      },
      {
        id: 3,
        title: 'Work out',
        completed: false,
      },
    ]
};

//------------------- Completes toggle
isCompleted= (id) =>{
  this.setState({tasks: this.state.tasks.map(task => {
    if(task.id === id){
      task.completed = !task.completed;
    }
    return task;
  })})
};

//------------------- Clears completed task
clearTask = () =>{
  this.setState({task: [...this.state.tasks.filter(task => task.completed === false)]});
};


//-------------------  Adds to Todo list
addTask = (title) => {
  const newTask ={
    id: Date.now,
    title,
    completed: false,

  }
  this.setState({tasks: [...this.state.tasks, newTask]})
}

// ------------------ Render
render(){
  return(
    <div className="app">
      <div className="container">
        <h1>Todo App</h1>
        <TodoForm addTask= {this.addTask} clearTask={this.clearTask} />
        <TodoList tasks={this.state.tasks} isCompleted={this.isCompleted} />
      </div>
    </div>
  )
};
};

export default App;
