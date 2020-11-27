import {Component} from 'react';
import './App.css';

class App extends Component {

  state = {

    input: "",
    list: []
  }

  handleInput = (event) => {
      this.setState({
        input: event.target.value
      });
  }

  handleAdd = (event) => {
    this.setState({
      list: [...this.state.list, this.state.input],
      input: ""
    });
    event.preventDefault();

  }

  handleRemove = (index) => {
    let updatedArray = this.state.list;
    updatedArray.splice(index, 1)
      this.setState({
        list: updatedArray
      });
  }

  render(){
    return (
      <div className="App">
        <>
          <Form 
            value={this.state.input} 
            handleAdd={this.handleAdd} 
            handleInput={this.handleInput}
            />
          {this.state.list.map((item, ind) => {
            return (
             <ListItem key={ind} task={item} handleRemove={this.handleRemove}/>
            )
          })

          }
        </>
      </div>
    );
  }
  
}

const Form = ({value, handleAdd, handleInput}) => {
 return ( <form onSubmit={handleAdd} action="">
    <input value={value} onChange={handleInput} type="text"/>
    <button type="submit">Add Task</button>
  </form>
 )
}

// const List = () => {
//   return(
//     <ListItem key={ind} task={item}/>
//   )
// }

const ListItem = ({ task, ind, handleRemove }) => {
  return (
    <>
      <div>{task}</div>
     <button type="button" onClick = {() => handleRemove(ind)}>
        Remove Task
      </button>
    </>
  )
}


export default App;
