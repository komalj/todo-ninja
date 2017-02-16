
import React from 'react';

export default class TodoItems extends React.Component {

    constructor(props) {
        super(props);
        this.deleteItem = this.deleteItem.bind(this);
        this.updateTodoText = this.updateTodoText.bind(this);
    }

    updateTodoStatus(e) {
        const item = e.target.parentNode;

        if (e.target.checked) {
            item.className = 'completed';
        } else {
            item.className = 'active';
        }
    }

    updateTodoText(e) {
        const itemID = e.target.parentNode.id;
        this.props.updateItem(itemID, this.newItemElement.value);
    }

    deleteItem(e) {
        const itemID = e.target.parentNode.id;
        this.props.deleteItem(itemID);
    }

    render() {
        const listItems = this.props.items.map(item => (
            <li key={item.id} id={item.id} className="active">
                <input type="checkbox" onClick={this.updateTodoStatus} />
                <input className="todoText" ref={a => this.newItemElement = a} defaultValue={item.text} onBlur={this.updateTodoText} />
                <div className="deleteButton" onClick={this.deleteItem}> &#10005; </div>
            </li>
        ));


        return (
            <ul className="theList">
                {listItems}
            </ul>
        );
    }

}
