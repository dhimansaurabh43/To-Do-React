import { MdEditNote, MdDelete } from "react-icons/md";

const ToDoItem = ({ task, deleteTask, startEditing, markCompleted }) => {
  return (
    <div className="flex items-center justify-between py-2 px-5 mb-5 rounded-lg bg-zinc-950">
      <div className="hidden md:block">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => markCompleted(task.id)}
        />
        {task.completed && (
          <span className="text-green-500 ml-4">Task Completed</span>
        )}
      </div>
      <div>
        <h3
          className={`text-white text-lg ${
            task.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {task.text}
        </h3>
      </div>
      <div className="flex gap-5">
        <MdEditNote
          className={`text-blue-500 text-xl cursor-pointer hover:scale-125 transition-all duration-300 ease-linear ${
            task.completed ? "cursor-not-allowed opacity-50" : ""
          }`}
          onClick={() => !task.completed && startEditing(task)}
        />
        <MdDelete
          className="text-red-500 text-xl cursor-pointer hover:scale-125 transition-all duration-300 ease-linear"
          onClick={() => deleteTask(task.id)}
        />
      </div>
    </div>
  );
};

export default ToDoItem;
