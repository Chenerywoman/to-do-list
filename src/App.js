import {Component} from 'react';
import './App.css';

class App extends Component {

  state = {

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
            <AddTaskForm 
            value={this.state.input} 
            handleAddTask={this.handleAddTask} 
            handleInput={this.handleInput}
            />
          
          {this.state.list.map((item, ind) => {
            return (
             <Task key={ind} task={item} handleRemoveTask={this.handleRemoveTask}/>
            )
          })

          }
        </div>
      </div>
    );
  }
  
}

const AddTaskForm = ({value, handleAddTask, handleInput}) => {
 return ( <form onSubmit={handleAddTask} action="">
    <input value={value} onChange={handleInput} type="text"/>
    <button type="submit">Add Task</button>
  </form>
 )
}

// const List = ({list, handleInput, handleAddTask, handleRemoveTask}) => {
//   return(
//     <>
//     <AddTaskForm   
//     value={this.state.input} 
//     handleAdd={this.handleAdd} 
//     handleInput={this.handleInput}
//     />
//     {list.map((item, ind) => {
//        return <Task key={ind} task={item} handleRemoveTask={handleRemoveTask}/>
//     })
     

//     }
    
//     </>
//   )
// }

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
