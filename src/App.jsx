import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import ToggleVibe from "./components/ToggleVibe";

export default function App() {
  // Ci-dessous un hook useState qui déclare une nouvelle variable d'état "todoList" (un tableau vide) et une fonction "setTodoList" qui permet de mettre à jour cette variable d'état.
  const [todoList, setTodoList] = useState([]);

  // Ci-dessous une fonction qui crée un nouvel objet “todo” (une tâche) avec les propriétés id, content, done et edit, puis l’ajoute à la fin du tableau “todoList”.
  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }

  function toogleEditTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              edit: !todo.edit,
            }
          : todo
      )
    );
  }

  function editTodo(id, content) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, edit: false, content } : todo
      )
    );
  }

  // Ci-dessous une fonction qui supprime une tâche via le "filter".
  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  }

  // Ci-dessous une fonction qui valide si une tâche est effectuée ou non.
  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  return (
    <>
      <ToggleVibe />
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        toggleTodo={toggleTodo}
        toogleTodoEdit={toogleEditTodo}
        editTodo={editTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
