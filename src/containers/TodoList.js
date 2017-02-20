
import { connect } from 'react-redux';
import { updateItemStatus, updateItemText, deleteItem } from '../actions/NoteGrid';
import TodoList from '../components/TodoList';


const mapDispatchToProps = (dispatch) => ({
  updateItemStatus: (itemID, noteID) => {
    dispatch(updateItemStatus(itemID, noteID));
  },
  updateItemText: (itemID, noteID, text) => {
    dispatch(updateItemText(itemID, noteID, text));
  },
  deleteItem: (itemID, noteID) => {
    dispatch(deleteItem(itemID, noteID));
  }
});

export default connect(
  null,
  mapDispatchToProps
)(TodoList);
