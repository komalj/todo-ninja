
const todoReducer = (state = {notes: []}, action) => {
  switch (action.type){
    case 'ADD_NOTE':
      return {notes: [...state.notes, {
        id: action.noteID,
        topic: 'Topic',
        items: [],
      }]};
    case 'ADD_ITEM':
      return {notes: state.notes.map(note => {
        if (note.id != action.noteID) {
          return note;
        }
        return Object.assign({}, note, {items: [...note.items, {
          id: action.itemID,
          text: action.text,
          status: 'active',
        }]});
      })};
    case 'UPDATE_TOPIC':
      return {notes: state.notes.map(note => {
        if (note.id != action.noteID) {
          return note;
        }
        return Object.assign({}, note, {topic: action.topic});
      })};
    case 'UPDATE_ITEM_STATUS':
      return {notes: state.notes.map(note => {
        if (note.id != action.noteID) {
          return note;
        }
        const newItemArray = note.items.map(item => {
          if(item.id != action.itemID) {
            return item;
          }
          const nextStatus = (item.status == 'active'? 'completed' : 'active');
          return Object.assign({}, item, {status: nextStatus});
        });

        return Object.assign({}, note, {items: newItemArray});
      })};
    case  'UPDATE_ITEM_TEXT':
      return {notes: state.notes.map(note => {
        if (note.id != action.noteID) {
          return note;
        }
        const newItemArray = note.items.map(item => {
          if(item.id == action.itemID) {
            item.text = action.text;
          }
          return item;
        });

        return Object.assign({}, note, {items: newItemArray});
      })};
    case 'DELETE_ITEM':
      return {notes: state.notes.map(note => {
        if (note.id != action.noteID) {
          return note;
        }
        const newItemArray = note.items.filter(item => {
          return item.id != action.itemID;
        });

        return Object.assign({}, note, {items: newItemArray});
      })};
    case 'DELETE_NOTE':
      return {notes: state.notes.filter(note => {
        return note.id != action.noteID;
      })};
    default:
      return state;
  }
};

export default todoReducer;