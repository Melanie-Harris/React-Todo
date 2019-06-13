import React from 'react';
import "./Todo.css";

const TodoForm = (props)=>{
    console.log(props)
        return (
            <form onSubmit={props.addTask}>
                <input 
                type="text" 
                name="title"
                placeholder="enter task"
                onChange={props.changeHandler}
                value={props.title}
                />
                <button type="submit" value="Submit">Add Task</button>
                {/* <button type="submit" value="Delete">Clear</button> */}
            </form>
           
        )
    };




export default TodoForm;


