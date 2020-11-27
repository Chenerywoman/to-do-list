const Task = ({ task, ind, handleRemoveTask }) => {
    return (
      <>
        <div>{task}</div>
       <button type="button" onClick = {() => handleRemoveTask(ind)}>
          Remove Task
        </button>
      </>
    )
  }

  export default Task;