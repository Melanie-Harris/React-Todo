import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm"

class App extends React.Component {
    state = {
        todoList: [
            {
                id: 1,
                title: 'Morning Meditation',
                completed: false,
            },
            {
                id: 2,
                title: 'Study Course Work',
                completed: false,
            },
            {
                id: 3,
                title: 'Work Out',
                completed: false,
            },
        ],
        id: '',
        title:'',
        completed: '',

    };
toggleButton= (itemId)=> {
    this.setState({
        todoList: this.state.todoList.map(objectInArray =>{
            if (itemId === objectInArray.id){
                return{
                    ...objectInArray,
                    completed: !objectInArray.completed
                }
            }
            return objectInArray;
        })
    })
}

    changeHandler = event=> {
        this.setState({
           [event.target.name]: event.target.value
        })
    }

    addTask = event =>{
        event.preventDefault()
        this.setState({
            todoList: [
                ...this.state.todoList,
                {
                    id: Date.now(),
                    title: this.state.title,
                    completed: false,
                }
            ]
        })
    }


    clearTaskAll= (event) => {
        console.log(event)
        this.setState({
            todoList: [],
        })
    }

    clearCompleted= (event)=>{
        this.setState({
            todoList: this.state.todoList.filter(item => !item.completed),
        })
    }

    render() {
        console.log(this.state.todoList)
        console.log(...this.state.todoList)
        return (
            <div className="App">
                <div className="container">
                    <h2>Your Awesome Todo List</h2>

                    <TodoList 
                    todoList={this.state.todoList} 
                    toggleButton={this.toggleButton}
                    />
                    <TodoForm 
                    title={this.state.title} 
                    completed={this.state.completed} 
                    changeHandler={this.changeHandler}
                    addTask={this.addTask}
                    />
                    <button onClick={this.clearTaskAll} >Clear ALL Task</button>
                    <button onClick={this.clearCompleted} >Clear Completed</button>
                </div>
            </div>
        );
    }
}



export default App;















