import React from 'react'
import './counter.css';
import ContentEditable from 'react-contenteditable'


class Counter extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        startingValue: 0,
        interval: 1,
        setup: true,
        title: "<div style='min-height: 1.1rem;'>Counter Title</div>"

      }

      this.contentEditable = React.createRef();

      this.setUp = this.setUp.bind(this)
    }

    setUp() {
      if (this.state.setup) {
        return (
          <div className='Counter-setup'>
            <ContentEditable
                innerRef={this.contentEditable}
                html={this.state.title} // innerHTML of the editable div
                disabled={false}       // use true to disable editing
                onChange={this.handleChange} // handle innerHTML change
                tagName='Counter-setup-title' // Use a custom HTML tag (uses a div by default)
              />

              <div className="Counter-setup-io"></div>  

          </div>
        )
      }
    }

    render () {
      return <div className='Counter'>
        {this.setUp()}
      </div>
    }
  }

export default Counter;

// <ContentEditable
//                 innerRef={this.contentEditable}
//                 html={this.state.title} // innerHTML of the editable div
//                 disabled={false}       // use true to disable editing
//                 onChange={this.handleChange} // handle innerHTML change
//                 tagName='Counter-setup-title' // Use a custom HTML tag (uses a div by default)
//               />