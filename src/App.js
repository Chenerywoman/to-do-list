import React, {Component} from 'react';
import List from './components/List';
import './App.css';

class App extends Component {

  state = {

    listName: "",
    listOfLists: []
  }

  handleListName = (event) => {
    this.setState({
      listName: event.target.value
    });
    console.log(`listName in handleListName ${this.state.listName}`)
  }

  handleAddList = (event) => {
    console.log(`listName in handleAddList ${this.state.listName}`)
    this.setState({
      listofLists: [...this.state.listOfLists, this.state.listName],
      listName: ""
    });
    event.preventDefault();
  }

  render(){
    console.log(`listofList in render method ${this.state.listOfLists}`)
    return (
      <div className="App">
        <div className="title">Task List</div>
        <div className="outer-container">
          <AddListForm 
            listName={this.listName}
            handleAddList={this.handleAddList}
            handleListName={this.handleListName}
          />
          {this.state.listOfLists.map((name, ind) => {
            console.log(name)
            return <List key={this.props.ind} title={this.props.name}/>
          })}


          {/* <List
            input = {this.state.input}
            list = {this.state.list}
            handleInput = {this.handleInput}
            handleAddTask = {this.handleAddTask}
            handleRemoveTask = {this.handleRemoveTask}
           />     */}
        </div>
      </div>
    );
  }
  
}

const AddListForm = ({listName, handleAddList, handleListName}) => {
  
  return ( 
    <form onSubmit={handleAddList} action="">
      <label htmlFor="">Name of List</label>
     <input value={listName} onChange={handleListName} type="text"/>
     <button type="submit" >Add List</button>
    </form>
  )
 }

export default App;
