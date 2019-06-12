// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import "./Todo.css";

const TodoList = (props)=>{
    console.log(props)
    console.log(props.todoList)
        return (
            <div>
                {props.todoList.map(todo => (
                    // <div key={todo.id}>
                    //     {todo.title}
                    // </div>
                    <todo key={todo.id} title={todo.task} />
                ))}
                
            </div>
        )
};



export default TodoList;



















// import './Todo.css';
// // import TodoForm from './TodoForm';
// import Todo from './Todo';
// import PropTypes from 'prop-types';

// class TodoList extends React.Component {
//     render() {
//         return this.props.tasks.map(task => <Todo key={task.id} task={task} markComplete={this.props.markComplete} />)
//     }
// }

// TodoList.propTypes = {
//     tasks: PropTypes.array.isRequired
// }

// export default TodoList;