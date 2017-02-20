
import React from 'react';

export default class TodoItems extends React.Component {

  updateItemStatus(e) {
    e.preventDefault();
    const itemID = this.props.id;
    const noteID = this.props.noteID;
    this.props.updateItemStatus(itemID, noteID);
  }

  updateItemText(e) {
    e.preventDefault();
    const itemID = this.props.id;
    const noteID = this.props.noteID;
    const text = this.inputElement.value;
    this.props.updateItemText(itemID, noteID, text);
  }

  deleteItem() {
    const itemID = this.props.id;
    const noteID = this.props.noteID;
    this.props.deleteItem(itemID, noteID);
  }

  render() {
    return(
      <li key={this.props.id} id={this.props.id} className={this.props.status}>
        <input type="checkbox" onClick={this.updateItemStatus.bind(this)} />
        <input type="textarea" className="todoText" ref={a => this.inputElement = a} defaultValue={this.props.text} onBlur={this.updateItemText.bind(this)} />
        <div className="deleteButton" onClick={this.deleteItem.bind(this)}> &#10005; </div>
      </li>
      )
  }

}
