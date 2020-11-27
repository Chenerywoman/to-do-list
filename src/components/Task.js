import './Task.css'

const Task = ({ task, ind, handleRemoveTask }) => {
    return (
      <div className="task">
        <div>{task}</div>
        <button type="button" onClick = {() => handleRemoveTask(ind)}>
          Remove
        </button>
      </div>
    )
  }

  export default Task;