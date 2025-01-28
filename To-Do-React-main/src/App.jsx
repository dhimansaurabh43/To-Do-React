import { useState, useRef } from "react";
import toast, { Toaster } from "react-hot-toast";
import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
import Navbar from "./components/Navbar";

const App = () => {
  const [tasks, setTasks] = useState([]);
  const taskIdRef = useRef(1);
  const [editingTask, setEditingTask] = useState(null);

  const capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const addTask = (taskText) => {
    if (!taskText.trim()) {
      return;
    }

    if (editingTask) {
      try {
        editTask(editingTask.id, capitalize(taskText));
        setEditingTask(null);
        toast.success("Task updated successfully!");
      } catch (error) {
        toast.error(error.message);
      }
    } else {
      try {
        const newTask = {
          id: taskIdRef.current,
          text: capitalize(taskText),
          completed: false,
        };
        setTasks([...tasks, newTask]);
        taskIdRef.current += 1;
        toast.success("Task added successfully!");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  const deleteTask = (taskId) => {
    try {
      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
      toast.success("Task deleted successfully!");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const editTask = (taskId, newTaskText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, text: newTaskText } : task
    );
    setTasks(updatedTasks);
  };

  const markCompleted = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  const startEditing = (task) => {
    setEditingTask(task);
  };

  return (
    <div>
      <Navbar />
      <Header addTask={addTask} editingTask={editingTask} />
      <ToDoList
        tasks={tasks}
        deleteTask={deleteTask}
        startEditing={startEditing}
        markCompleted={markCompleted}
      />
      <Toaster />
    </div>
  );
};

export default App;
