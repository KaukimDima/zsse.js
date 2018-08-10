import React, { Component } from 'react';


class Company extends Component {
    
    state = {
        budget : 10000,
        products : [
            {
                poduct: "Чай",
                price: 1000,
                quantity: 10,
                id: 1
            },
            
            {
                poduct: "Молоко",
                price: 500,
                quantity: 15,
                id: 2
            },

            {
                poduct: "Хлеб",
                price: 500,
                quantity: 15,
                id: 3
            }
        ]
    }

    render() {
        
        return (
            <div> </div>
        )

}
};
export default Company;
