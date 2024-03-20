import React, {useState, useEffect} from "react";
import "./App.css";
const App = () => {
  const [todos, setTodos] = useState([]);
  const [todoEditing, setTodoEditing] = useState(null);

  // Add the handlesubmit code here
  function handleSubmit(e) {
    e.preventDefault();
    let todo = document.getElementById('todoAdd').value
    const newTodo = {
      id: new Date().getTime(),
      text: todo.trim(),
      completed: false,
    };
    if (newTodo.text.length > 0 ) {
        setTodos([...todos].concat(newTodo));
    } else {
        alert("Enter Valid Task");
    }
    document.getElementById('todoAdd').value = ""
  }
  
  // Add the deleteToDo code here
  function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  }
  
  // Add the toggleComplete code here
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  
  // Add the submitEdits code here
  function submitEdits(newtodo) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === newtodo.id) {
        todo.text = document.getElementById(newtodo.id).value;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }

    //useeffect
    useEffect(() => {
      const json = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setTodos(loadedTodos);
      }
    }, []);
  
  useEffect(() => {
      if(todos.length > 0) {
          const json = JSON.stringify(todos);
          localStorage.setItem("todos", json);
      }
    }, [todos]);
  
return(
  <div id="todo-list">
  <h1>Todo List</h1>
  {/* Formulario para agregar nuevos todos */}
  <form onSubmit={handleSubmit}>
    <input
      type="text"
      id='todoAdd'
    />
    <button type="submit">Add Todo</button>
  </form>
  {/* Mapeo de todos existentes para mostrar en la lista */}
  {todos.map((todo) => (
    <div key={todo.id} className="todo">
      <div className="todo-text">
        {/* Checkbox para marcar como completado */}
        <input
          type="checkbox"
          id="completed"
          checked={todo.completed}
          onChange={() => toggleComplete(todo.id)}
        />
        {/* Si está en modo de edición, muestra un input para editar el texto, de lo contrario, muestra el texto */}
        {todo.id === todoEditing ?
          (<input
            type="text"
            id={todo.id}
            defaultValue={todo.text}
          />) :
          (<div>{todo.text}</div>)
        }
      </div>
      <div className="todo-actions">
        {/* Si está en modo de edición, muestra un botón para enviar las ediciones, de lo contrario, muestra un botón para editar */}
        {todo.id === todoEditing ?
          (
            <button onClick={() => submitEdits(todo)}>Submit Edits</button>
          ) :
          (
            <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
          )}
        {/* Botón para eliminar el todo */}
        <button onClick={() => deleteTodo(todo.id)}>Delete</button>
      </div>
    </div>
  ))}
</div>

);
};
export default App;
