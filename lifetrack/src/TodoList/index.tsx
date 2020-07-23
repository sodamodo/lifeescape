import React, { Component } from 'react'; // let's also import Component
import './todolist.css';


type TodoListProps {
    text: string;
};

// type TodoListState = {
//     text: string; // like this
// };

export class TodoList extends Component<TodoListProps, {}> {
    constructor(props: TodoListProps){
        super(props);
    
        this.state = {
          text: "hai"
        };
    }

    render() {
        return (
            <div className="TodoList">
                <div className="TodoList-title">TITLE</div>
                <div className="TodoList-item" text="first item"/>
            </div>
        )
    }
}

export default TodoList;

