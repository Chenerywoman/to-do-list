import React, {Component} from 'react';
import AddTaskForm from './AddTaskForm';
import Task from './Task';
import './List.css'

class List extends Component {

    state = {
      input: "",
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
      const updatedArray = [...this.state.list];
      updatedArray.splice(index, 1)
      this.setState({
        list: updatedArray
      });
    }
  
    render() {
      return (
        <div className="list">
          <h2>{this.props.title}</h2>
          <AddTaskForm
            value={this.state.input}
            handleAddTask={this.handleAddTask}
            handleInput={this.handleInput}
          />
          {this.state.list.map((item, ind) => {
            return <Task key={ind} task={item} handleRemoveTask={this.handleRemoveTask} onDragStart={this.props.onDragStart} onDragOver={this.props.onDragOver} onDrop={this.props.onDrop}/>
          })
          }
          <button id="delete-list" type="button" onClick = {() => this.props.handleRemoveList(this.props.ind)}>
          Delete List
        </button>
        </div>
      )
    }
  }

  export default List;