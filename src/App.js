import React from 'react';
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./App.css";

class App extends React.Component {
    state = {
        todoList: [
            // {
            //     id: 1,
            //     title: 'Morning Meditation',
            //     completed: false,
            // },
            // {
            //     id: 2,
            //     title: 'Study Course Work',
            //     completed: false,
            // },
            // {
            //     id: 3,
            //     title: 'Work Out',
            //     completed: false,
            // },
        ],
        id: '',
        title: '',
        completed: '',

    };
    toggleButton = (itemId) => {
        this.setState({
            todoList: this.state.todoList.map(objectInArray => {
                if (itemId === objectInArray.id) {
                    return {
                        ...objectInArray,
                        completed: !objectInArray.completed
                    }
                }
                return objectInArray;
            })
        })
    }

    changeHandler = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    addTask = event => {
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


    clearTaskAll = (event) => {
        console.log(event)
        this.setState({
            todoList: [],
        })
    }

    clearCompleted = (event) => {
        this.setState({
            todoList: this.state.todoList.filter(item => !item.completed),
        })
    }

    render() {
        console.log(this.state.todoList)
        console.log(...this.state.todoList)
        return (
            <div className="FullContainer">
                <div className="App">
                    <div className="container">
                        <h2>Your Awesome Todo List</h2>
                        <p />
                        <br />

                        <h3>Task:</h3>
                        <TodoList
                            todoList={this.state.todoList}
                            toggleButton={this.toggleButton}
                        />
                        <br />
                        <br />
                        <br />
                        <TodoForm
                            title={this.state.title}
                            completed={this.state.completed}
                            changeHandler={this.changeHandler}
                            addTask={this.addTask}
                        />

                        <br /><br />
                        <button className="clear-completed" onClick={this.clearCompleted} >Clear Checked Task</button>
                        &nbsp;&nbsp;&nbsp;
                    <button className="clear-all-btn" onClick={this.clearTaskAll} >Clear All Task</button>
                    </div>
                    <br /><br /><br />
                    <span className="heading-instructions"> 1)Write your task in the input field, then press "add task" to post. </span><br /><br />
                    <span className="heading-instructions"> 2)After completing a task, click on that task to remove it from your list. You will then see the completed task striked out. </span><br /><br />
                    <span className="heading-instructions"> 3)Click "clear checked task" to permanently remove task you've completed. </span> <br /><br />
                    <span className="heading-instructions"> 4)Click "clear all task" to start a new list. <strong>Caution</strong>, this will remove everything from your list.</span>

                </div>
            </div>
        );
    }
}



export default App;



