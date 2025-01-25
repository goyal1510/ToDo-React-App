import { useState } from "react"
import Header from "./components/Header"
import "./styles/style.css"
import ToDoList from "./components/TodoList";

function App() {
  const [todoList,setTodoList] = useState([]);
  const [newTask,setNewTask] = useState('');
  function handleAddTast(){
    if(newTask.trim()){
      setTodoList([...todoList,{ id: Date.now(), task: newTask, completed:false}]);
      setNewTask('');
    }
      
  }
  const toggleComplete = (id) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodoList(todoList.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodoList(todoList.map(todo => todo.id === id ? { ...todo, task: newText } : todo));
  };
  return (
    <div className="app">
      <Header/>
      <div className="input-section">
        <input type="text" value={newTask} onChange={(e)=>setNewTask(e.target.value)} placeholder="  Add New Task"/>
        <button onClick={handleAddTast}>ADD</button>
      </div>
      <ToDoList todoList={todoList} 
      toggleComplete={toggleComplete}
      deleteTodo={deleteTodo}
      editTodo={editTodo}/>
    </div>
  )
}

export default App
