import React, { Component } from 'react';
import Company from '../company/company';


class Client extends Component {

    selectProduct = () => {

        let id=Math.floor((Math.random() * 3) + 1);

      }

    render() {
        
        return (
            <div>  
                <button type="button" className="btn btn-primary" onClick={this.selectProduct}>Choose Product</button>
            </div>
        )

}
};
export default Client;
