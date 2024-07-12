import { useState } from "react";

export default function EditTodo({ todo, editTodo, cancelEditTodo }) {
  const [value, setValue] = useState(todo.content);

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDow(e) {
    if (e.code === "Enter" && value.length) {
      editTodo(value);
      setValue("");
    }
  }

  function handleEdit() {
    if (value.length) {
      editTodo(value);
      setValue("");
    }
  }

  return (
    <div className="bg-white shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:w-5/6 md:w-4/5 xl:w-5/6">
            <input
              type="text"
              name="text"
              id="tache"
              onChange={handleChange}
              onKeyDown={handleKeyDow}
              value={value}
              className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              placeholder="Nom de la tâche"
            />
          </div>
          <button
            className="ml-5 mr-5 w-28 rounded-md hover:bg-gray-100 py-2"
            onClick={cancelEditTodo}
          >
            Annuler
          </button>
          <button
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-0 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-0 sm:mt-0 sm:w-1/6 md:w-28"
            onClick={handleEdit}
          >
            Sauvegarder
          </button>
        </form>
      </div>
    </div>
  );
}
