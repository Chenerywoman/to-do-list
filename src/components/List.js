import React from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './List.css'

const List = ({listIndex, tasks, title, handleRemoveList, input, handleInput, handleAddTask, handleRemoveTask}) => {
    console.log(`list in List${tasks}`);
  return (
    <div className="list">
      <h2>{title}</h2>
      <AddTaskForm
        value={input}
        handleInput={handleInput}
        listIndex={listIndex}
        handleAddTask={handleAddTask}
      />
      {tasks.map((item, ind) => {
        console.log(`in individual list map`)
        return (
          <Task 
            key={ind} 
            task={item} 
            listIndex={listIndex}
            handleRemoveTask={handleRemoveTask} 
          />
          )
        })
      }
      <button id="delete-list" type="button" onClick = {() => handleRemoveList(listIndex)}>
      Delete List
    </button>
    </div>
  )
}

  export default List;