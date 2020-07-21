import React, { Component } from 'react'; // let's also import Component
import './todolist.css';


export class TodoListProps
{
    text: string = "";
}

type TodoListState = {
    count: number; // like this
  };

export class TodoList extends Component<{title: string}, TodoListState> {
    
    // let items = [
    //             {id: 1, checked: false, text: "first item"},
    //             {id: 2, checked: false, text: "second item"},
    //             {id: 3, checked: false, text: "third item"}

    //             ];

    // for (const [index, value] of items()) {
    //     items.push(<li key={index}>{value}</li>)
    // }

    render() {
        return (
            <div className="TodoList">{this.props.title}</div>
        )
    }
}

export default TodoList;