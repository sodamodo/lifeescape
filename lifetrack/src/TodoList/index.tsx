import React, { Component } from 'react'; // let's also import Component
import './todolist.css';
import TodoListItem from './TodoListItem';

type TodoListProps = {
    title: string;
    item_list: string[]
}

type TodoListState = {
    text: string; // like this
    item_list: string[]
};

export class TodoList extends Component<TodoListProps, TodoListState> {
    constructor(props: any){
        
        super(props);
        this.state  = {
          text: "hai",
          item_list: this.props.item_list   
        };
    }

    render() {

        let listItems = this.props.item_list.map((text: string) =>
            <TodoListItem checked={false} text={text} />
        )

        return (
            <div className="TodoList">
                <div className="TodoList-title">{this.props.title}</div>
                {listItems}
                
            </div>
        )
    }
}

export default TodoList;

   /* <div className="TodoList-item" text="first item"/> */