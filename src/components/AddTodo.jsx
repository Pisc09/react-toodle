import { useState } from "react";

export default function AddTodo({ addTodo }) {
  const [value, setValue] = useState("");

  function handleChange(e) {
    const inputValue = e.target.value;
    setValue(inputValue);
  }

  function handleKeyDow(e) {
    if (e.code === "Enter" && value.length) {
      handleAdd();
    }
  }

  function handleAdd(e) {
    e.preventDefault();
    if (value.length) {
      addTodo(value);
      setValue("");
    }
  }

  return (
    <div className="bg-white dark:bg-slate-900 shadow sm:rounded-lg">
      <div className="px-4 py-5 sm:p-6">
        <h1>As salam</h1>
        <h3 className="text-2xl dark:text-indigo-400 font-semibold leading-6 text-indigo-600">
          TodoBoost Listify
        </h3>
        <div className="mt-2 max-w-xl dark:text-gray-400 text-lg text-gray-500">
          <p>Ajoutez les tâches que vous voulez gérer dans votre liste.</p>
        </div>
        <form className="mt-5 sm:flex sm:items-center">
          <div className="w-full sm:w-5/6 md:w-4/5 xl:w-5/6">
            <label htmlFor="email" className="sr-only">
              Nouvelle Tâche
            </label>
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
            type="submit"
            className="mt-3 inline-flex w-full items-center justify-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 sm:ml-3 sm:mt-0 sm:w-1/6 md:w-1/5 xl:w-1/6"
            onClick={handleAdd}
          >
            Nouvelle Liste de Tâches
          </button>
        </form>
      </div>
    </div>
  );
}
