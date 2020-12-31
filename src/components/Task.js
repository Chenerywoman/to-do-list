import './Task.css'
import SelectList from './SelectList'

const Task = ({ task, ind, listIndex, handleRemoveTask, handleMoveTask, listOfTitles }) => {

    return (
      <div className="task" >
        <div class="task-content">
          <p>{task}</p>
          <button class="remove-task" type="button" onClick = {() => handleRemoveTask(ind, listIndex)}>
            Remove
          </button>
        </div>
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