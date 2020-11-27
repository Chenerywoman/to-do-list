import React, {Component} from 'react';
import AddListForm from './components/AddListForm';
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
  }

  handleAddList = (event) => {
    let tempList = [...this.state.listOfLists];
    tempList.push(this.state.listName)
    this.setState({
      listOfLists: [...this.state.listOfLists, this.state.listName],
      listName: "",
    });
    console.log(this.state.listOfLIsts)
    event.preventDefault();
  }

  handleRemoveList = (ind) => {
    let updatedArrayofLists = [...this.state.listOfLists];
      updatedArrayofLists.splice(ind, 1)
      this.setState({
        listOfLists: updatedArrayofLists
      });
  }

  onDragStart = () => {

  }

  onDragOver = () => {

  }

  onDrop = () => {

  }

  render(){
    console.log(`listofList in render method ${this.state.listOfLists}`)
    return (
      <div className="App">
        <h1 className="title">My Lists</h1>
        <div className="outer-container">
          {this.state.listOfLists.map((name, ind) => {
            console.log(name)
            return <List key={ind} title={name} handleRemoveList={this.handleRemoveList} ind={ind} onDragStart={this.onDragStart} onDragOver={this.onDragOver} onDrop={this.onDrop}/>
          })}
           <AddListForm 
            listName={this.state.listName}
            handleAddList={this.handleAddList}
            handleListName={this.handleListName}
          />
        </div>
      </div>
    );
  }
  
}

export default App;
