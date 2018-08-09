
import React, { Component } from 'react'; 

class Blog extends Component {
constructor (props) {
    super (props)
    this.state = {
        status: this.props.isLoggedIn,
        blogs : []
    };
    console.log(this.state.status.isLoggedIn);
}
    componentDidMount ()  {
        fetch(`https://zsse.herokuapp.com/api/blog`)
        .then(response => response.json())
        .then(json => this.setState ({ blogs : [... this.state.blogs, json.response] }) )
    }

    render() { 
        const blogs=this.state;
        console.log(blogs);
       //if (this.state.status.isLoggedIn ) {
           return (
            <div>
                <h1>
                    { blogs.map ( (el,i) =>
                    <div key={i}>
                   <p>
                  {el.id}                     
                 </p> 
                  <p>
               {el.text}
                 </p>   
                </div>            
            ) };
                    </h1>
            </div>
        );
    //}
   // else return (
     //   <div>  </div>
    //)
    }
}
 
export default Blog;