
import React from 'react';
import update from 'react-addons-update';
import TodoList from './TodoList.js';

let noteID = 0;

export default class NoteGrid extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            notes: [],
        };
        this.addNote = this.addNote.bind(this);
        this.updateNote = this.updateNote.bind(this);
        this.updateGrid = this.updateGrid.bind(this);
    }

    addNote() {
        noteID += 1;

        const notesArray = update(this.state.notes, {$push: [{
            id: noteID,
            topic: 'Topic',
            items: [],
        }]});

        this.setState({
            notes: notesArray
        });
    }

    updateNote(id, val, newVal) {
        const notesArray = this.state.notes.map(note => {
            if (note.id == id) {
                note[val] = newVal;
            }
            return note;
        })

        this.setState({
            notes: notesArray,
        });

    }

    updateGrid(id) {
        const noteArray = this.state.notes.filter(note => {
            return note.id != id;
        });

        this.setState({
            notes: noteArray
        })
    }

    render() {
        const allNotes = this.state.notes.map(note =>
            <TodoList key={note.id} thisNote={note} updateNote={this.updateNote} updateGrid={this.updateGrid} />
        );

        return (
            <div className="theGrid">
                <div className="newNoteButton" onClick={this.addNote}> + </div>
                {allNotes}
            </div>
        );
    }

}