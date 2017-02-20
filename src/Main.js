
import React from 'react'
import { render } from 'react-dom'
import { compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import todoReducer from './reducers/NoteGrid'
import persistState from 'redux-localstorage'

const enhancer = compose(persistState());

const store = createStore(todoReducer, enhancer);

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("container")
);

git