import React, {Component} from 'react';

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
            <form onSubmit={this.handleSubmit}>
            <label>
            move to:
            <select value={this.state.value} onChange={this.handleChange}>
                {this.props.listOfTitles.map((title, ind) => {
                    return (
                    <option key={ind} value={title}>{title}</option>
                    )
                })}
            </select>
            </label>
            <input type="submit" value="Submit" />
        </form>
    )
    }
}

export default SelectList;