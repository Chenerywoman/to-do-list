import React, {Component} from 'react';
import AddListForm from './components/AddListForm';
import List from './components/List';
import './App.css';

class App extends Component {

  state = {
    listName: "",
    listOfLists: [],
    input: "",
    list: {
      title: "",
      tasks: []
    }
  }

  handleListName = (event) => {
    this.setState({
      listName: event.target.value
    });
  }

  handleAddList = (event) => {
  
    let newListOfLists = [...this.state.listOfLists]
    let newList = {...this.state.list}
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

  // handleInput = (event) => {
  //   this.setState({
  //     input: event.target.value
  //   });
  // }
    
  handleAddTaskToList = (input, listIndex) => {
    console.log(`handleAddTaskToList: input ${input}, listIndex: ${listIndex}`)

    let tempList = this.state.listOfLists[listIndex].title
    console.log(`temp list in handleTaskToList: ${tempList}`)
    
    // this.setState({
    //   listOfLists: [...this.state.list, this.state.input],
    //   input: ""
    // });
    // event.preventDefault();

  }
  
  handleRemoveTask = (index) => {
      const updatedArray = [...this.state.list];
      updatedArray.splice(index, 1)
      this.setState({
        list: updatedArray
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
                tasks={this.state.list.tasks}
                title={list.title} 
                handleRemoveList={this.handleRemoveList} 
                // input={this.state.input}
                // handleInput={this.handleInput}
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
