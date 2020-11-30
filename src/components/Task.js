import './Task.css'
import SelectList from './SelectList'

const Task = ({ task, ind, listIndex, handleRemoveTask, handleMoveTask, listOfTitles }) => {

    return (
      <div className="task" >
        <div>{task}</div>
        <button type="button" onClick = {() => handleRemoveTask(ind, listIndex)}>
          Remove
        </button>
        <SelectList
          listIndex={listIndex}
          taskIndex={ind}
          handleMoveTask={handleMoveTask}
          listOfTitles={listOfTitles}
        />
      </div>
    )
  }

  export default Task;