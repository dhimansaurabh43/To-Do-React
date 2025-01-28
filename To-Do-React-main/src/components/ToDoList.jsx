import ToDoItem from "./ToDoItem";

const ToDoList = ({ tasks, deleteTask, startEditing, markCompleted }) => {
  return (
    <div className="py-2 px-4">
      {tasks.length === 0 ? (
        <h1 className="text-zinc-300 text-xl font-semibold text-center">
          All Tasks Finished Or No Task Added
        </h1>
      ) : (
        <ul>
          {tasks.map((task) => (
            <ToDoItem
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              startEditing={startEditing}
              markCompleted={markCompleted}
            />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ToDoList;
