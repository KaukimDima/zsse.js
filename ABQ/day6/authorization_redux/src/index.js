import React, {Component, PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import createStore from './store';
import {addComment, deleteComment, login, logout} from './actions/commentsActions';
import {getComments, getFlagLogin} from './reducers';
import {Provider, connect} from 'react-redux';
import { BrowserRouter as Router, HashRouter, Route, Link, Redirect } from "react-router-dom";

const store = createStore();
let cnt = 0;
const getId = () => {
    cnt = cnt + 1;
    return (cnt)
    
}


class App extends Component {
render(){

    return(
        <Router>
        <div>
            <ul>
              <li>
                <Link to="/">Authorize</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>

            <Route  exact path = "/" component={BlogWithRedux} />
            <Route  path = "/login" component={LoginWithRedux} />
            <Route  path = "/logout" component={LogoutWithRedux} />




        </div>
        </Router>
    )
}
}

class LogOut extends Component {
    
    render(){
        const {logout} = this.props;
        logout(false);
        return(
    <div>
        You are logged out, if you want to log please login another time!!!
    </div>
        )
    }
}

class Login extends Component{

    state = {
        login: '',
        password: '',
        data: ''
    }

    handleChangeLogin = (e) => {
        this.setState({login : e.target.value})

    }

    handleChangePassword = (e) => {
        this.setState({password : e.target.value})
    }


    handleClickSubmit = (e) => {
        e.preventDefault();
        const {login, password, data} = this.state;
        
        const dataNeed = [];
       fetch(`https://zsse.herokuapp.com/api/user/${login}/`)
       .then(response => response.json())
       .then(data =>  this.setState({...this.state, data : data}))
       console.log(data.succes)
        // if (login == "user" && password == "1"){
        //     this.props.login(true);
        //     // console.log(this.props)
        // }

        if (data.succes == 0){ 
            this.props.login(true);

    }}


    render(){
        return(
            <div>
                <h2>Login page</h2>
            <input type="login" onChange = {this.handleChangeLogin}/>
            <input type="password" onChange = {this.handleChangePassword}/>
            <button type="submit" onClick={this.handleClickSubmit}>Submit</button>
            </div>
        )
    }
}







class Blog extends Component {
  state = {
   id: cnt,
   text: ''
  };

handleChangeComment = (e) => {

    this.setState({text : e.target.value})
}


handleKeyDown = (e) => {
    const {addComment} = this.props;
    const {comments} = this.props;
    
    
    
    if( e.keyCode == 13){
        const numb = getId();

        this.setState({id : numb})

         addComment(this.state)

    }
}

handleRemove = (e)=> {
    const {deleteComment} = this.props;
    deleteComment(e.target.name)
}


 
  render() {
    const {comments} = this.props;

    if (!this.props.isloggedin) {
        return <div>
            <Router>
            <div>
              <Redirect to={{
            pathname: "/login"
          }} />
          <h1>Please first log in</h1>
          </div>
            </Router>
          </div>;
      }
    return (
      <main>
          <h2> BLOGS </h2>
        <input
          value={this.state.commentBody}
          onChange={this.handleChangeComment}
          onKeyDown={this.handleKeyDown}
        />
        
        {comments.map((comment) => (
            <section key={[comment.id, comment.text].join('_')}>
            <p> {comment.text} <button type="" onClick = {this.handleRemove} name = {comment.id}>Delete post</button> </p>
            </section>
        ))}

      </main>
    );
  }
}







const mapStateToProps = (state) => ({
    comments : getComments(state),
    isloggedin : getFlagLogin(state)
})

const mapDispatchsToProps = {
    addComment,
    deleteComment,
    login,
    logout
}

const BlogWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(Blog)


const LoginWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(Login)


const AppWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(App)

const LogoutWithRedux = connect(
    mapStateToProps,
    mapDispatchsToProps
)(LogOut)



ReactDOM.render(
  <Provider store={store}>
    <AppWithRedux />
  </Provider>,
  document.getElementById('root')
);
