import React, {Component} from 'react';
import AddListForm from './components/AddListForm';
import List from './components/List';
import './App.css';

class App extends Component {

  state = {
    listName: "",
    listOfLists: [],
    listOfTitles: []
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

    let newListOfTitles = newListOfLists.map((list, ind) =>  {
      return list.title
    })
  
    this.setState({
      listOfLists: [...newListOfLists],
      listName: "",
      listOfTitles: newListOfTitles
    });
    
    event.preventDefault();
  }

  handleRemoveList = (ind) => {
    
    let updatedArrayofLists = [...this.state.listOfLists];
    updatedArrayofLists.splice(ind, 1)

    let newListOfTitles = updatedArrayofLists.map((list, ind) =>  {
      return list.title
    })

      this.setState({
        listOfLists: updatedArrayofLists,
        listOfTitles: newListOfTitles
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

  handleMoveTask = (taskInd, listInd, newListInd) => {
    let newListOfLists = [...this.state.listOfLists];
    const taskToMove = newListOfLists[listInd].tasks[taskInd];

    newListOfLists[newListInd].tasks.push(taskToMove);
    newListOfLists[listInd].tasks.splice(taskInd, 1);

    let newListOfTitles = newListOfLists.map((list, ind) =>  {
      return list.title
    })
  
    this.setState({
      listOfLists: newListOfLists,
      listOfTitles: newListOfTitles
    })
    
    

  }

  render(){ 
    return (
      <div className="App">
        <div className="fixed-container">
            <h1 className="title">My Lists</h1>
            <AddListForm 
            listName={this.state.listName}
            handleAddList={this.handleAddList}
            handleListName={this.handleListName}
            />
        </div>
        
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
                handleMoveTask={this.handleMoveTask}
                listOfTitles={this.state.listOfTitles}
            />
            )
          })}
        </div>
      </div>
    );
  }
  
}

export default App;
