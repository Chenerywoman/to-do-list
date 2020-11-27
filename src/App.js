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
    let tempList = [...this.state.listOfLists];
    tempList.push(this.state.listName)
    this.setState({
      listOfLists: [...tempList],
      // listofLists: [...this.state.listOfLists, this.state.listName],
      listName: "",
    });
    console.log(this.state.listOfLIsts)
    event.preventDefault();
  }

  handleRemoveList = (ind) => {
    let updatedArrayofLists = this.state.listOfLists;
      updatedArrayofLists.splice(ind, 1)
      this.setState({
        listOfLists: updatedArrayofLists
      });
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
            return <List key={ind} title={name} handleRemoveList={this.handleRemoveList} ind={ind}/>
          })}
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
