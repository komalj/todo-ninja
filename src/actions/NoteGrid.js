
let nextNoteID = 0;
let nextItemID = 0;

export const addNote = () => ({
    type: 'ADD_NOTE',
    noteID: nextNoteID++
});

export const updateTopic = (noteID, topic) => ({
    type: 'UPDATE_TOPIC',
    noteID: noteID,
    topic: topic
});

export const addItem = (noteID, text) => ({
    type: 'ADD_ITEM',
    noteID: noteID,
    itemID: nextItemID++,
    text: text
});

export const updateItemStatus = (itemID, noteID) => ({
  type: 'UPDATE_ITEM_STATUS',
  itemID: itemID,
  noteID: noteID
});

export const updateItemText = (itemID, noteID, text) => ({
  type: 'UPDATE_ITEM_TEXT',
  itemID: itemID,
  noteID: noteID,
  text: text
});

export const deleteItem = (itemID, noteID) => ({
  type: 'DELETE_ITEM',
  itemID: itemID,
  noteID: noteID
});


export const deleteNote = (noteID) => ({
    type: 'DELETE_NOTE',
    noteID: noteID
});
