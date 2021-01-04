import './AddTaskForm.css'

const AddTaskForm = ({value, handleInput, listIndex, handleAddTask}) => {
    return ( 
      <form className="form add-task" id={listIndex} onSubmit={handleAddTask} action="">
       <input required className="input add-task" value={value} onChange={handleInput} type="text"/>
       <button className="button add-task" type="submit">Add</button>
      </form>
    )
   }

export default AddTaskForm