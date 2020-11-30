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

    let newListOfLists = [...this.state.listOfLists]
    let newList =  {
      title: "",
      tasks: []
    }
    newList.title = this.state.listName
    newListOfLists.push(newList)
  
    this.setState({
      listOfLists: [...newListOfLists],
      listName: "",
    });
    
    event.preventDefault();
  }

  handleRemoveList = (ind) => {
    
    let updatedArrayofLists = [...this.state.listOfLists];
    updatedArrayofLists.splice(ind, 1)

      this.setState({
        listOfLists: updatedArrayofLists
      });
    }
  
  handleAddTaskToList = (input, listIndex) => {

    let newListOfLists = [...this.state.listOfLists];
    newListOfLists[listIndex].tasks.push(input)
   
    this.setState({
      listOfLists: newListOfLists
    });

  }
  
  handleRemoveTask = (taskInd, listInd) => {
    let newListOfLists = [...this.state.listOfLists];
    newListOfLists[listInd].tasks.splice(taskInd,1)
     
      this.setState({
        listOfLists: [...newListOfLists]
      });
  }

  render(){
    return (
      <div className="App">
        <h1 className="title">My Lists</h1>
        <div className="outer-container">
          {this.state.listOfLists.map((list, ind) => {
            return (
              <List 
                key={ind} 
                listIndex={ind} 
                tasks={list.tasks}
                title={list.title} 
                handleRemoveList={this.handleRemoveList} 
                handleAddTaskToList={this.handleAddTaskToList}
                handleRemoveTask={this.handleRemoveTask}
            />
            )
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
