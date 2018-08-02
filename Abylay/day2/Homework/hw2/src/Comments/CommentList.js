import React, { Component } from 'react';

class SendComment extends Component {

    Ondeletecomment = e =>  {
        const {onDeleteApp}=this.props;
       onDeleteApp(this.props.id, this.props.name);
      }
   
    render() {
        const {name,comment}=this.props;
        return (<div className="list__messages">
        <form>
        <div className="form-group">
        <div>
        <label htmlFor="exampleFormControlTextarea1" >Name: {name}</label>
        </div>
        <div>
        <label htmlFor="exampleFormControlTextarea1">Comment: {comment}</label>   
        </div>    
        <div>
          <h1 >  <span className="cross"  onClick={this.Ondeletecomment}> &#215; </span>  </h1>
        </div>
         </div>
        </form>
        </div>);
    }
};
export default SendComment;