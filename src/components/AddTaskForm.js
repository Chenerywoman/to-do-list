const AddTaskForm = ({value, handleAddTask, handleInput}) => {
    return ( 
      <form onSubmit={handleAddTask} action="">
       <input value={value} onChange={handleInput} type="text"/>
       <button type="submit">Add Task</button>
      </form>
    )
   }

export default AddTaskForm;