import { useState } from "react";
import TaskCreate from "./TaskCreate";

function TaskShow({ task, onDelete,onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);
  const handleDeleteClick = (event) => {
    onDelete(task.id);
  };
  const handleUpdateClick = (event) => {
    setShowEdit(!showEdit);
  };
  const handleSubmit = (id,updatedTitle,updatedTaskDesc) => {
    setShowEdit(false);
    onUpdate(id,updatedTitle,updatedTaskDesc);
  };
  //   console.log(task);
  return (
    <div className="task-show">
      {showEdit ? (
        <TaskCreate task={task} taskFormUpdate={true} onUpdate={handleSubmit}/>
      ) : (
        <>
          <h3>Task</h3>
          <p>{task.title}</p>
          <h3>To Do</h3>
          <p>{task.taskDesc}</p>
          <div>
            <button className="btn-delete" onClick={handleDeleteClick}>
              Delete
            </button>
            <button className="btn-update" onClick={handleUpdateClick}>
              Update
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default TaskShow;
