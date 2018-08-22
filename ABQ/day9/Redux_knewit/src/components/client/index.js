import React, {Component, PureComponent} from 'react';

export default class Client extends Component {

    render(){
         
        const {randIdProduct} = this.props;

       
        const randomProductFromRedux = this.props.products.filter( el => 
            el.id == randIdProduct
          )
          
          const itemOfRandomProduct = randomProductFromRedux[0].item;
          const quantityOfRandomProduct = randomProductFromRedux[0].quantity;
          const priceOfRandomProduct = randomProductFromRedux[0].price;
          const restQuantityOfRandomProduct = randomProductFromRedux[0].restQuantity;
          const selectedQuantity = Math.floor(Math.random() * quantityOfRandomProduct) + 1;
          const totalAmount = selectedQuantity * priceOfRandomProduct;
          //console.log(itemOfRandomProduct)
        return(
            
            <div>
                <p>Item:{itemOfRandomProduct}</p>
                <p>Price:{priceOfRandomProduct}</p>
                <p>Quantity:{selectedQuantity}</p>
                <p>Total amount money to pay for it:{totalAmount}</p>
            </div>
    
                
        )

    }
}