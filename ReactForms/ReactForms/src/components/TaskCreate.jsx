import { useState } from "react";

function TaskCreate({ onCreate, task, taskFormUpdate,onUpdate }) {
  const [title, setTitle] = useState(task ? task.title : "");
  const [taskDesc, setTaskDesc] = useState(task ? task.taskDesc : "");

  //   console.log(title,taskDesc)

  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleTaskChange = (event) => {
    setTaskDesc(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //app.jsx e data gonder
    if(taskFormUpdate){
      onUpdate(task.id, task.title, task.taskDesc)
    }
    else{
      onCreate(title, taskDesc);
    }
    setTitle("");
    setTaskDesc("");
  };

  return (
    <div>
      {taskFormUpdate ? (
        <div>
          <h3>Updating Task!</h3>
          <form className="task-form">
            <label className="task-header-label">Edit Task Header</label>
            <input
              className="task-header-input"
              value={title}
              onChange={handleChange}
              type="text"
              required
              minLength={5}
            />
            <label className="task-enter-label">Edit Task</label>
            <textarea
              className="task-textarea"
              value={taskDesc}
              onChange={handleTaskChange}
              rows={5}
              type="text"
              required
              minLength={10}
            />
            <button className="btn-update-clicked" onClick={handleSubmit}>
              Update
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h3>Please Add A Task!</h3>
          <form className="task-form" >
            <label className="task-header-label">Task Header</label>
            <input
              className="task-header-input"
              value={title}
              onChange={handleChange}
              type="text"
              required
              minLength={5}
            />
            <label className="task-enter-label">Enter Task!</label>
            <textarea
              className="task-textarea"
              value={taskDesc}
              onChange={handleTaskChange}
              rows={5}
              type="text"
              required
              minLength={10}
            />
            <button className="btn-create" onClick={handleSubmit}>Create</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default TaskCreate;
