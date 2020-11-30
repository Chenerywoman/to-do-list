import React from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './List.css'

// const List = ({listIndex, tasks, title, handleRemoveList, input, handleInput, handleAddTask, handleRemoveTask}) => {

 class List extends React.Component { 

  state = {
    input: "",
  }

  handleInput = (event) => {
    this.setState({
      input: event.target.value
    });
  }
    
  handleAddTask = (event) => {
    this.props.handleAddTaskToList(this.state.input, this.props.listIndex)
    this.setState({
      input: ""
    })
    event.preventDefault();

  }

  render (){
  return (
    <div className="list">
      <h2>{this.props.title}</h2>
      <AddTaskForm
        value={this.state.input}
        handleInput={this.handleInput}
        listIndex={this.props.listIndex}
        handleAddTask={this.handleAddTask}
      />
      {this.props.tasks.map((item, ind) => {
        return (
          <Task 
            key={ind} 
            task={item} 
            ind={ind}
            listIndex={this.props.listIndex}
            handleRemoveTask={this.props.handleRemoveTask} 
          />
          )
        })
      }
      <button id="delete-list" type="button" onClick = {() => this.props.handleRemoveList(this.props.listIndex)}>
      Delete List
    </button>
    </div>
  )
    }
}

  export default List;