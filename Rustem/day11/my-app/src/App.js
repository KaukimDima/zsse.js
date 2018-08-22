import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    data : [

{
  header: "SomeHead",

  innerText: "Smth"
}
   
    ]
  }


  ComponentDidMount(){


    console.log(this.$go);

  }

  
  render() {
    return (
      <div className="App">


      {this.state.data.map((el, i) => 
    
      <px-accordion-group>
      <px-accordion
      icons='{"more":"px-utl:chevron-right","less":"px-utl:chevron","action":[{"icon":"px-utl:edit"},{"icon":"px-utl:delete"}]}'
      header-value={el.header}
      status="Last Updated: 3 Days Ago"

      ref = {(el) => this.$value = el} >
      

      {el.innerText}

</px-accordion>

{/*  */}</px-accordion-group>
)}


{/* <px-gauge
value={30}
min={0}
max={100}
bar-width={0}
unit="unit"
error={[[0,12],[79,100]]}
abnormal={[[12,32],[68,79]]}
anomaly={[[32,45],[54,68]]}
normal={[[45,54]]}>
</px-gauge> */}

        
      </div>



    );
  }
}

export default App;
