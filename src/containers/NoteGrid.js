
import { connect } from 'react-redux';
import { addNote, updateTopic, addItem, deleteNote } from '../actions/NoteGrid';
import NoteGrid from '../components/NoteGrid';


const mapDispatchToProps = (dispatch) => ({
  addNote: () => {
    dispatch(addNote());
  },
  updateTopic: (noteID, topic) => {
    dispatch(updateTopic(noteID, topic));
  },
  addItem: (noteID, text) => {
    dispatch(addItem(noteID, text));
  },
  deleteNote: (noteID) => {
    dispatch(deleteNote(noteID));
  }
});

const mapStateToProps = (state) => {
  return ({
    notes: state.notes
  });
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NoteGrid);
