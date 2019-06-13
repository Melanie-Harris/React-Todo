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




















// import './Todo.css';
// // import ProTypes from 'prop-types';

// class TodoForm extends React.Component{
//     state ={
//         title: ''
//     }
//     onChange= event =>{
//         this.setState({[event.target.name]: event.target.value});
//     }
//     onClick= event => {
//         event.preventDefault();

//         if (this.state.title !==''){
//             this.props.addTask(this.state.title);
//         }
//         this.setState({title: ''});
//     }
//     deleteTaskHandler= event=> {
//         event.preventDefault();
//         this.props.deleteTask();
//     }

//     render(){
//         return(
//             <form className="todoForm">
//                 <input type="text" name="title" placeholder="Add Task..." className="inputField" value={this.state.title} onChange={this.onChange} />
//                 <button type="submit" value="Submit" className="btn" onClick={this.onClick}>Add Task</button>
//                 <button type="submit" value="Delete" className="btn" onClick={this.deleteTaskHandler}>Delete Tasks</button>
//             </form>
//         )
//     }
// };

// export default TodoForm;