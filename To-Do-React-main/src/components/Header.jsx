import { useState, useEffect } from "react";

const Header = ({ addTask, editingTask }) => {
  const [taskText, setTaskText] = useState("");

  useEffect(() => {
    if (editingTask) {
      setTaskText(editingTask.text);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskText.trim()) return;
    addTask(taskText);
    setTaskText("");
  };

  return (
    <div className="mt-20 p-4">
      <form
        className="flex flex-col md:flex-row gap-3 w-full"
        onSubmit={handleSubmit}
      >
        <div className="flex flex-col md:flex-row gap-2 w-full items-center">
          <label className="text-zinc-300 text-xl font-semibold">Task</label>
          <input
            type="text"
            className="p-1 md:p-2 rounded-md outline-none md:w-[70%] w-full"
            value={taskText}
            onChange={(e) => setTaskText(e.target.value)}
          />
          <button
            className={`px-2 py-1 md:p-2 rounded-md text-zinc-200 transition-all duration-300 ease-linear md:w-[30%] lg:w-[20%] w-full ${
              editingTask
                ? "bg-blue-700 hover:bg-blue-800"
                : "bg-green-700 hover:bg-green-800"
            }`}
          >
            {editingTask ? "Update Task" : "Add Task"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Header;
