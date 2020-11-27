import React, {Component} from 'react';
import './App.css';

class App extends Component {

  state = {
    input: '',
    listofLists: [],
    list: []
  }

  handleInput = (event) => {
      this.setState({
        input: event.target.value
      });
  }

  handleAddTask = (event) => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
    event.preventDefault();

  }

  handleRemoveTask = (index) => {
    let updatedArray = this.state.list;
    updatedArray.splice(index, 1)
      this.setState({
        list: updatedArray
      });
  }

  render(){
    return (
      <div className="App">
        <div className="outer-container">
          <List 
            input = {this.state.input}
            list = {this.state.list}
            handleInput = {this.handleInput}
            handleAddTask = {this.handleAddTask}
            handleRemoveTask = {this.handleRemoveTask}
           />    
        </div>
      </div>
    );
  }
  
}

const List = ({ input, list, handleInput, handleAddTask, handleRemoveTask }) => {
  return (
    <>
      <AddTaskForm
        value={input}
        handleAddTask={handleAddTask}
        handleInput={handleInput}
      />
      {list.map((item, ind) => {
        return <Task key={ind} task={item} handleRemoveTask={handleRemoveTask} />
      })
      }
    </>
  )
}

const AddTaskForm = ({value, handleAddTask, handleInput}) => {
  return ( 
    <form onSubmit={handleAddTask} action="">
     <input value={value} onChange={handleInput} type="text"/>
     <button type="submit">Add Task</button>
    </form>
  )
 }

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


export default App;
