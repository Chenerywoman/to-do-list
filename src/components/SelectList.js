import React, {Component} from 'react';
import './SelectList.css'

class SelectList extends Component {

    state = {
        value: "",
        chosenIndex: 0 
    }

    handleChange = (event) => {
        
        this.setState({
            value: event.target.value,
            chosenIndex: event.target.selectedIndex
        })
    }

    handleSubmit = (event) => {

        this.props.handleMoveTask(this.props.taskIndex, this.props.listIndex,this.state.chosenIndex );
        event.preventDefault();
    }

    render () {
        return (
            <form class="select-list" onSubmit={this.handleSubmit}>
            <label>
            move to:
            <select class="list-of-lists" value={this.state.value} onChange={this.handleChange}>
                {this.props.listOfTitles.map((title, ind) => {
                    return (
                    <option key={ind} value={title}>{title}</option>
                    )
                })}
            </select>
            </label>
            <input className="move-button" type="submit" value="Move" />
        </form>
    )
    }
}

export default SelectList;