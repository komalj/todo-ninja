
import React from 'react';
import TodoItem from '../components/TodoItem';


export default class TodoList extends React.Component {

  render() {
    const listItems = this.props.items.map(item => (
      <TodoItem key={item.id} noteID={this.props.noteID} updateItemStatus={this.props.updateItemStatus} updateItemText={this.props.updateItemText}
                deleteItem={this.props.deleteItem} {...item} />
    ));

    return (
      <ul className="theList">
        {listItems}
      </ul>
    );
  }

}