const AddTaskForm = ({value, handleInput, listIndex, handleAddTask}) => {
  console.log(`value in AddTaskForm ${value}`)
  // try adding list index to state on input & use that on submit to add task in right list
    return ( 
      <form id={listIndex} onSubmit={handleAddTask} action="">
       <input id={listIndex} value={value} onChange={handleInput} type="text"/>
       <button type="submit">Add Task</button>
      </form>
    )
   }

export default AddTaskForm