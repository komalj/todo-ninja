
import React from 'react'
import { render } from 'react-dom'
import NoteGrid from '../containers/NoteGrid'


export default class App extends React.Component {

  render() {
    return (
      <div>
        <div id="mainHeader">
          Todo Ninja
        </div>
        <NoteGrid />
      </div>
    );
  }

}