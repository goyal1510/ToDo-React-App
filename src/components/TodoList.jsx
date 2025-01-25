/* eslint-disable react/prop-types */
import ToDoItem from "./ToDoItem";

function ToDoList(props){
    return(
        <ul className="todo-list">
            {props.todoList.map((todo)=>
            <ToDoItem key={todo.id} todo={todo}
            toggleComplete={props.toggleComplete}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}/>)}
        </ul>
    )
}

export default ToDoList;