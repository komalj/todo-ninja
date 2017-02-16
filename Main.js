
import React from 'react';
import ReactDOM from 'react-dom';
import NoteGrid from './components/NoteGrid.js';

var destination = document.getElementById("container");

ReactDOM.render(
  <div>
    <div id="mainHeader">
      Todo Ninja
    </div>
    <NoteGrid />
  </div>,
  destination
);
