import React, { Component } from 'react';



class Test2 extends Component {
  render() {
    const {reply} = this.props;
    console.log('reply', reply)
    return (

      <div className="Test2">
            <ul>
       
        {reply.map( (el, i) => 

              <li key = {i}> {el.title} </li>

        )}
            </ul>

      </div>
    );
  }
}

export default Test2;
