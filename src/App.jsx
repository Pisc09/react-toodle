import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodoList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodoList([...todoList, todo]);
  }

  function toggleTodo(id) {
    setTodoList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodoList(todoList.filter((todo) => todo.id !== id));
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

  return (
    <>
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
