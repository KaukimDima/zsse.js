import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './store';
import {addComment, deleteComment} from './actions/commentsActions';
import {getComments} from './reducers';
import {Provider, connect} from 'react-redux';

const store = createStore();
let cnt = 0;
const getId = () => {
    cnt = cnt + 1;
    return (cnt)
    
}


class App extends PureComponent {
  state = {
   id: cnt,
   text: ''
  };

handleChangeComment = (e) => {

    this.setState({text : e.target.value})
                                
    // console.log(this.state.text)
}


handleKeyDown = (e) => {
    const {addComment} = this.props;
    const {comments} = this.props;
    
    
    
    if( e.keyCode == 13){
        const numb = getId();

        this.setState({id : numb})
        
        // addComment(this.state)
        console.log(this.props)
         addComment(this.state)
       // console.log("commeeeeents",comments)
    }
}

handleRemove = (e)=> {
    const {deleteComment} = this.props;
    
   // console.log(e.target.name);
    deleteComment(e.target.name)

}
// componentDidMount(){
//     const {addComment} = this.props;
//     addComment(this.state)

// }


 
  render() {
    const {comments} = this.props;
    console.log(comments)
    return (
      <main>
        <input
          value={this.state.commentBody}
          onChange={this.handleChangeComment}
          onKeyDown={this.handleKeyDown}
        />
        
        {/* {comments.map((comment, i) => (
            <p> {comment} </p>
        ))} */}
        
        {/* {Object.keys(comments).map((key, i) => (
            <div>
              <h3>{key} ---- </h3>
            </div>
          ))} */}

         
       
        {Object.keys(comments).map((comment, i) => (
          <section key={[comment, i].join('_')}>
            <p >{comments[i].text} 
            <button type="" onClick = {this.handleRemove} name = {i}>Delete post</button>
            </p>
          </section>
        ))}
      </main>
    );
  }
}




const mapStateToProps = (state) => ({
    comments : getComments(state)
})


const mapDispatchsToProps = {
    addComment,
    deleteComment
}

const AppWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(App)

ReactDOM.render(
<Provider store = {store}>
<App />
</Provider>, document.getElementById('root'));


