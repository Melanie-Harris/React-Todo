import React from "react";
import "./Todo.css";

const Todo = (props) => {
    console.log(props.title)
    return (
        <div
            className={`${props.title.completed ? 'todo-lines': ''}`}
            onClick={()=> props.toggleButton(props.title.id)}
        > 
        {props.title.title}
        </div>
    )
};



export default Todo;

