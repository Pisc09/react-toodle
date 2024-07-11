import TodoItem from "./TodoItem";
import EditTodo from "./EditTodo";

export default function TodoList({
  todoList,
  deleteTodo,
  toggleTodo,
  toogleTodoEdit,
  editTodo,
}) {
  return todoList.length ? (
    <ul>
      {todoList.map((todo) =>
        todo.edit ? (
          <EditTodo
            key={todo.id}
            todo={todo}
            cancelEditTodo={() => toogleTodoEdit(todo.id)}
            editTodo={(content) => editTodo(todo.id, content)}
          />
        ) : (
          <TodoItem
            key={todo.id}
            todo={todo}
            editTodo={() => toogleTodoEdit(todo.id)}
            deleteTodo={() => deleteTodo(todo.id)}
            toggleTodo={() => toggleTodo(todo.id)}
          />
        )
      )}
    </ul>
  ) : (
    <p className="p-5">Aucune tâche pour le moment.</p>
  );
}
