import './Task.css'

const Task = ({ task, ind, listIndex, handleRemoveTask }) => {
  console.log(`taskIndex  in Task ${ind}`)
    return (
      <div className="task" >
        <div>{task}</div>
        <button type="button" onClick = {() => handleRemoveTask(ind, listIndex)}>
          Remove
        </button>
      </div>
    )
  }

  export default Task;