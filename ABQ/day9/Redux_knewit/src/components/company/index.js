import React, {Component, PureComponent} from 'react';

export default class Company extends Component {

    render(){
        console.log("COMPOANY::",this.props);
        return(
            <div>
                Company
            </div>
                
        )

    }
}