import React, {Component, PureComponent} from 'react';

export default class Customer extends Component {

    render(){
        console.log("CUSTOMER", this.props);
        return(
            <div>
                Customer
            </div>
                
        )

    }
}