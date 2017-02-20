
import React from 'react';
import TodoList from '../containers/TodoList';

export default class Note extends React.Component {

  updateTopic(e) {
    e.preventDefault();
    const noteID = this.props.note.id;
    const topic = this.topicElement.value;
    this.props.updateTopic(noteID, topic);
  }

  addItem(e) {
    e.preventDefault();
    const noteID = this.props.note.id;
    const text = this.inputElement.value;
    this.props.addItem(noteID, text);
    this.inputElement.value = '';
  }

  deleteNote() {
    const noteID = this.props.note.id;
    this.props.deleteNote(noteID);
  }

  render() {
    return (
      <div className="noteBody">
        <div className="noteHead">
          <span className="deleteNoteButton" onClick={this.deleteNote.bind(this)}> &#10005; </span>
        </div>
        <form className="noteTopic" onSubmit={this.updateTopic.bind(this)}>
          <input ref={a => this.topicElement = a} className="noteTopic" defaultValue={this.props.note.topic} onBlur={this.updateTopic.bind(this)} />
        </form>
        <form className="newItem" onSubmit={this.addItem.bind(this)}>
          <input ref={a => this.inputElement = a} className="newItem" placeholder="add todo" />
        </form>
        <TodoList noteID={this.props.note.id} items={this.props.note.items} />
      </div>
    );
  }

}