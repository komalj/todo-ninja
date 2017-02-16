
import React from 'react';
import update from 'react-addons-update';
import TodoItems from './TodoItems.js';

let todoID = 0;

export default class TodoList extends React.Component {

    constructor(props) {
        super(props);
        this.updateTopic = this.updateTopic.bind(this);
        this.addItem = this.addItem.bind(this);
        this.updateItem = this.updateItem.bind(this);
        this.deleteItem = this.deleteItem.bind(this);
        this.deleteNote = this.deleteNote.bind(this);
    }

    updateTopic(e) {
        e.preventDefault();
        this.props.updateNote(this.props.thisNote.id, 'topic', this.topicElement.value);
    }

    addItem(e) {
        e.preventDefault();

        todoID += 1;

        const itemArray = update(this.props.thisNote.items, {$push: [{
            id: todoID,
            text: this.inputElement.value
        }]});

        this.props.updateNote(this.props.thisNote.id, 'items', itemArray);
        this.inputElement.value = '';
    }


   updateItem(itemID, newText) {
       const itemArray = this.props.thisNote.items;
       const newItemArray = itemArray.map(item => {
           if(item.id == itemID) {
               item.text = newText;
           }
           return item;
       });

       this.props.updateNote(this.props.thisNote.id, 'items', newItemArray);
   }

    deleteItem(itemID) {
        const itemArray = this.props.thisNote.items;
        const newItemArray = itemArray.filter(item => {
            return item.id != itemID
        });

        this.props.updateNote(this.props.thisNote.id, 'items', newItemArray);
    }

    deleteNote() {
        this.props.updateGrid(this.props.thisNote.id);
    }

    render() {
        const note = this.props.thisNote;
        const itemArray = note.items;

        return (
            <div className="noteBody">
                <div className="noteHead">
                    <span className="deleteNoteButton" onClick={this.deleteNote}> &#10005; </span>
                </div>
                <form className="noteTopic" onSubmit={this.updateTopic}>
                    <input ref={a => this.topicElement = a} className="noteTopic" placeholder="Topic" onBlur={this.updateTopic} />
                </form>
                <form className="newItem" onSubmit={this.addItem}>
                    <input ref={a => this.inputElement = a} className="newItem" placeholder="enter task" />
                </form>
                <TodoItems items={itemArray} deleteItem={this.deleteItem} updateItem={this.updateItem}/>
            </div>
        );
    }

}