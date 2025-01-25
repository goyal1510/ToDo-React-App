/* eslint-disable react/prop-types */
import {useState} from "react";
function ToDoItem(props){
    
    const [isEditing, setIsEditing] = useState(false);
  const [newTask, setNewTask] = useState(props.todo.task);

  const handleEdit = () => {
    props.editTodo(props.todo.id, newTask);
    setIsEditing(false);
  };

  return (
    <li className='todo-item'>
      {isEditing ? (
        <>
          <input
            type="text"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: props.todo.completed ? 'line-through' : 'none' }}>
            {props.todo.task}
          </span>
          <div className="todo-item-buttons">

          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => props.toggleComplete(props.todo.id)}>
            {props.todo.completed ? 'Undone' : 'Done'}
          </button>
          <button onClick={() => props.deleteTodo(props.todo.id)}>Delete</button>
          </div>
          
        </>
      )}
    </li>
  );
};

export default ToDoItem;
