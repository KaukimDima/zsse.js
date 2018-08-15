import React, { Component } from 'react';
class Accordion extends Component {

    constructor(props){

        super(props);
}

componentDidMount(){

    this.$accordion.status = "googoogo";
}
  render() {

    
    return (
      <div>

          <px-accordion-group>


           <px-accordion ref = {n => {this.$accordion = n}} ></px-accordion>


            </px-accordion-group>
       
      </div>
    );
  }
}

export default Accordion;
