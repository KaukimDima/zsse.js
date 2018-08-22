import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    value : 30,
    accordionData : [
      {
        header : "Header1",
        innerText  : "InnerText"
      },
      {
        header : "Header1",
        innerText  : "InnerText"
      }
    ]
  }
  componentDidMount() {
    console.log(this.Input);
    console.log(this.$alertLabel);
    console.log(this.$alertLabel1);
  }
  render() {
    return (
      <div className="App">
        
        <px-accordion-group>
          {this.state.accordionData.map( (el, i) => 
          
          <px-accordion
            key={i}
            icons='{"more":"px-utl:chevron-right","less":"px-utl:chevron","action":[{"icon":"px-utl:edit"},{"icon":"px-utl:delete"}]}'
            header-value={el.header}
            status="Last Updated: 3 Days Ago">
            {el.innerText}
              <px-gauge
                value={this.state.value}
                min={0}
                max={100}
                bar-width={0}
                unit={''}
                error={[[0, 12], [79, 100]]}
                abnormal={[[12, 32], [68, 79]]}
                anomaly={[[32, 45], [54, 68]]}
                normal={[[45, 54]]}>
              </px-gauge>
          </px-accordion>
          )}
        </px-accordion-group>      

        <button onClick={(el) => this.setState({
          value: Math.floor(Math.random() * 100) + 1 }) }>
          click me
        </button>  
      </div>
    );
  }
}

export default App;
