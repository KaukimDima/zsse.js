import React, { Component } from 'react';
import { buyTea, 
  buyMilk,
  buyBread } from '../../actions/listActions';
import { getProducts } from '../../reducers';
import { connect } from 'react-redux';

class Client extends Component {

  state = {
    tea: 0,
    milk: 0,
    bread: 0,

  };
  
  handleChangeTea = () => {

    this.setState({ tea: Math.floor(Math.random() * 10)

   /*  const {buyTea } = this.props;

    const { tea } = this.state.tea;
 */



    });
}

handleChangeMilk = () => {


  this.setState({ milk: Math.floor(Math.random() * 10)});

}

handleChangeBread = () => {
  this.setState({ bread: Math.floor(Math.random() * 10)
  });
}


  render() {

    const { records } = this.props;

    console.log(records)

    console.log(this.state)


    return (


      <div>


      
      <button onClick={this.handleChangeTea}> TEA </button>

      <button onClick = {this.handleChangeMilk}> MILK </button>

      <button onClick= {this.handleChangeBread}> BREAD </button>


      <div>
          {records.map((el, i) => (
            <h3 key={i}>
           Name: "{el.product}"  Cost: {el.cost}   Left: {el.number}
            </h3>
          ))}

        </div>

        
      </div>
    );
  }
}

const mapStatetoProps = state => ({
	records : getProducts(state)
});

const mapDispatchtoProps = {
    buyTea, 
    buyMilk,
    buyBread
}; 

export default connect(
	mapStatetoProps,
	mapDispatchtoProps
)(Client);

