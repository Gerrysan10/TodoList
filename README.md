# Conclusiones
## Funciones
### handleSubmit

```jsx
    function handleSubmit(e) {
        e.preventDefault();
        let todo = document.getElementById('todoAdd').value
        const newTodo = { //Crea un objeto  con la tarea y su estado
        id: new Date().getTime(),
        text: todo.trim(),
        completed: false,
        };
        if (newTodo.text.length > 0 ) { // Verifica que no esté vacío el input
            setTodos([...todos].concat(newTodo));
        } else {
            alert("Enter Valid Task");
        }
        document.getElementById('todoAdd').value = "" // Limpia el input al enviar
    }
```
### deleteTodo
```jsx
   function deleteTodo(id) {
    let updatedTodos = [...todos].filter((todo) => todo.id !== id); //Crea una copia donde solo almacena los valores que no fueron eliminados y actualiza Todos.
    setTodos(updatedTodos);
}
```
### toggleComplete
```jsx
    function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {// crea una copia de todos para poder actualizar sin afectar a los demas elementos
        if (todo.id === id) {
            todo.completed = !todo.completed;
        }
        return todo;
    });
    setTodos(updatedTodos);
}
```
### submitEdits
```jsx
   function submitEdits(newtodo) {
    const updatedTodos = [...todos].map((todo) => { // Busca el elemento a editar en base a su ID
      if (todo.id === newtodo.id) {
        todo.text = document.getElementById(newtodo.id).value;
        }
        return todo;
      });
      setTodos(updatedTodos);
      setTodoEditing(null);
    }
```
### useEffect: actualizar
```jsx
   useEffect(() => { //  Actualiza la vista cada vez que se modifique un Todo
      const json = localStorage.getItem("todos");
      const loadedTodos = JSON.parse(json);
      if (loadedTodos) {
        setTodos(loadedTodos);
      }
    }, []);
```
### useEffect: Guardar cambios
```jsx
   useEffect(() => { //  Guarda los cambios de todos en el Local Storage cada vez que se agregue o quite un Todo 
      if(todos.length > 0) {
          const json = JSON.stringify(todos);
          localStorage.setItem("todos", json);
      }
    }, [todos]);
  
```


## Aprendizajes 

- **Aprendizaje de React Hooks:** Aprendí cómo usar los "hooks" de React llamados `useState` y `useEffect`. Estos ayudan a manejar el estado y los efectos secundarios en componentes de React sin necesidad de clases.

- **Uso de Local Storage:** Aprendí a guardar datos localmente en el navegador del usuario utilizando `localStorage`. Esto es útil para mantener la información incluso después de recargar la página.

- **Gestión de formularios y eventos:** Aprendí a manejar eventos como enviar un formulario y hacer clic en botones para editar o eliminar elementos. Esto me permitió controlar cómo interactúa la aplicación con el usuario.

- **Prácticas de codificación:** Vi ejemplos de buenas prácticas al escribir código, como dividir la lógica en funciones más pequeñas y reutilizables. Esto hace que el código sea más fácil de entender y mantener.

- **Uso de Skills Network :** la plataforma web de skill network me ayudo a entender cada una de las funciones vistas anteriormente. Me permitio enfocarme más en entender el código al no tener que desarrollarlo por mi cuenta.

En resumen, esta actividad me ayudó a entender mejor cómo construir aplicaciones web usando React y me dio habilidades prácticas que puedo seguir desarrollando en el futuro.

