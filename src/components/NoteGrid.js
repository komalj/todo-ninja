
import React from 'react';
import Note from '../components/Note';

export default class NoteGrid extends React.Component {

  render() {
    const allNotes = this.props.notes.map(note =>
			<Note key={note.id} updateTopic={this.props.updateTopic} addItem={this.props.addItem} deleteNote={this.props.deleteNote} note={note} />
    );

    return (
			<div className="theGrid">
				<div className="newNoteButton" onClick={this.props.addNote}> +</div>
        {allNotes}
			</div>
    );
  }

}