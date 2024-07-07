import { useState } from "react";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoList, setTodiList] = useState([]);

  function addTodo(content) {
    const todo = {
      id: crypto.randomUUID(),
      content,
      done: false,
      edit: false,
    };
    setTodiList([...todoList, todo]);
  }

  function ToggleTodo(id) {
    setTodiList(
      todoList.map((todo) =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function deleteTodo(id) {
    setTodiList(todoList.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todoList={todoList}
        ToggleTodo={ToggleTodo}
        deleteTodo={deleteTodo}
      />
    </>
  );
}
