const AddTaskForm = ({value, handleInput, listIndex, handleAddTask}) => {
    return ( 
      <form id={listIndex} onSubmit={handleAddTask} action="">
       <input value={value} onChange={handleInput} type="text"/>
       <button type="submit">Add Task</button>
      </form>
    )
   }

export default AddTaskForm