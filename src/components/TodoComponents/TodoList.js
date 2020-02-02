// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import "./Todo.css";
import Todo from "./Todo";

const TodoList = (props)=>{
    console.log(props)
    console.log(props.todoList)
        return (
            <div>
                {props.todoList.map(todo => (
                    
                    <Todo
                    key={todo.id} 
                    title={todo} 
                    toggleButton={props.toggleButton}
                    
                    />
                ))}
                
            </div>
        )
};



export default TodoList;


