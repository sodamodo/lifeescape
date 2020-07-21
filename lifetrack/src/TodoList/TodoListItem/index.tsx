import React, { Component } from 'react'; // let's also import Component
import './todolistitem.css';


type TodoListItemState = {
    checked: boolean ;
    text: string
  };

type TodoListItemProps = {
checked: boolean ;
text: string
};

export class TodoListItem extends Component<TodoListItemProps, TodoListItemState> {
    
    render() {
        return (
            <div className="TodoListItem">
                <div className="TodoListItem-checkbox">B</div>
                <div className="TodoListItem-text">{this.props.text}</div>
            </div>
        )
    }
}

export default TodoListItem;