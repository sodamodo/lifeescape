import React, { Component } from 'react'; // let's also import Component
import './todolistitem.css';
// import CSS from 'csstype';
import ContentEditable from 'react-contenteditable'


// type TodoListItemState = {
//     checked: boolean ;
//     strikeStyle: any;
//   };

// type TodoListItemProps = {
//     checked: boolean ;
//     text: string;

// };

export class TodoListItem extends Component {
    
    constructor(props) {
        super(props);     
        this.state = {
            checked: false,
            stateStyle : {
                fontSize: '3rem',
                boxShadow: '0 0 10px rgba(0, 0, 0, 0.3)'
            },
            editable: false,
            text: this.props.text,
            html: "<b>Hello <i>World</i></b>"
        }
        this.handleBoxClick=this.handleBoxClick.bind(this);
        this.contentEditable = React.createRef();

        // this.toggleTextInput=this.toggleTextInput.bind(this);

    }

    
    handleBoxClick() {
        console.log("=====handleclick fires====")
        console.log(this.state.checked);
        if (!this.state.checked) {
            this.setState({
                checked: !this.state.checked,
                stateStyle: {textDecoration: "line-through"}
            });
        }

        else {
            this.setState({
                checked: !this.state.checked,
                stateStyle: {textDecoration: ""}
            });
        }
        
    }
    
    

    handleChange() {

    }


    render() {       

        return (
            <div className="TodoListItem">
                    <div className="TodoListItem-checkbox">
                        <input type='checkbox' onClick={this.handleBoxClick}/>
                    </div>
                    {/* <div contentEditable={this.state.editable} className="TodoListItem-text" style={this.state.stateStyle} onDoubleClick={this.toggleTextInput}>{this.state.text}</div> */}
                    <ContentEditable
                        html={this.state.html} // innerHTML of the editable div
                        disabled={false} // use true to disable edition
                        onChange={this.handleChange} // handle innerHTML change
                    />

            </div>
        )
    }


    
}

export default TodoListItem;


// toggleTextInput(event) {

//     const element = event.currentTarget

//     console.log("======TEXT STATE======")
//     console.log(this.state.text);
    
//     console.log("======ETEXT ELEMENT======")
//     console.log(this.state.text);

//     if (this.state.editable) {
//         this.setState({
//             text:  event.target.value,
//             editable: !this.state.editable
            
//         });
//     }

//     else {
//         this.setState({
//             editable: !this.state.editable
//         });
//     }

// }


    // public toggleTextInput(event: any) {

    //     const element = event.currentTarget as HTMLInputElement

    //     console.log("======TEXT STATE======")
    //     console.log(this.state.text);
        
    //     console.log("======ETEXT ELEMENT======")
    //     console.log(this.state.text);

    //     if (this.state.editable) {
    //         this.setState({
    //             text:  event.target.value,
    //             editable: !this.state.editable
                
    //         }, () => {
    //             return <div>This div should be editable</div>
    //         });
    //     }

    //     else {
    //         this.setState({
    //             editable: !this.state.editable
    //         }, () => {
    //             return <div>This div should NOT be editable</div>
    //         });
    //     }

    // }