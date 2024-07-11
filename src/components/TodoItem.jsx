import {
  CheckIcon,
  PencilIcon,
  TrashIcon,
  PaperClipIcon,
} from "@heroicons/react/20/solid";

export default function TodoItem({ todo, deleteTodo, toggleTodo, editTodo }) {
  return (
    <section className="p-6">
      <div className="overflow-hidden rounded-lg shadow-sm focus-within:border-indigo-500 focus-within:ring-1 focus-within:ring-indigo-500 p-5 w-full">
        <li className="text-gray-900 w-full flex flex-row flex-nowrap space-x-1">
          <span className="text-gray-900">{todo.content}</span>
          {todo.done && (
            <CheckIcon
              className="text-gray-900 h-5 w-5 flex-shrink-0 sm:-ml-1"
              aria-hidden="true"
            />
          )}{" "}
        </li>
      </div>

      <div className="inset-x-px bottom-0">
        <div className="flex flex-nowrap justify-end space-x-2 px-2 py-2 sm:px-3">
          <button
            type="button"
            className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3"
            onClick={editTodo}
          >
            <PencilIcon
              className="text-gray-300 h-5 w-5 flex-shrink-0 sm:-ml-1"
              aria-hidden="true"
            />
            <span className="text-gray-900 hidden truncate sm:ml-2 sm:block">
              Modifier
            </span>
          </button>

          <button
            type="button"
            className="relative inline-flex items-center whitespace-nowrap rounded-full bg-gray-50 px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-100 sm:px-3"
            onClick={deleteTodo}
          >
            <TrashIcon
              className="text-gray-300 h-5 w-5 flex-shrink-0 sm:-ml-1"
              aria-hidden="true"
            />

            <span className="text-gray-900 hidden truncate sm:ml-2 sm:block">
              Supprimer
            </span>
          </button>
        </div>
        <div className="flex items-center justify-between space-x-3 border-t border-gray-200 px-2 py-2 sm:px-3">
          <div className="flex">
            <button
              type="button"
              className="group -my-2 -ml-2 inline-flex items-center rounded-full px-3 py-2 text-left text-gray-400"
            >
              <PaperClipIcon
                className="-ml-1 mr-2 h-5 w-5 group-hover:text-gray-500"
                aria-hidden="true"
              />
              <span className="text-sm italic text-gray-500 group-hover:text-gray-600">
                Joindre un fichier
              </span>
            </button>
          </div>
          <div className="flex-shrink-0">
            <button
              type="submit"
              className="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 space-x-3"
              onClick={toggleTodo}
            >
              <span>Valider la tâche</span>
              <CheckIcon
                className="text-white h-5 w-5 flex-shrink-0 sm:-ml-1"
                aria-hidden="true"
              />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
