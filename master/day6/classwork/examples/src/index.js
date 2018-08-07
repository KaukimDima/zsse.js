import React, {PureComponent} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './awsm.css';
import createStore from './store';
import {addComment} from './actions/commentsActions';
import {getComments, getCommentsCounts} from './reducers';
import {Provider, connect} from 'react-redux';

const store = createStore();

class App extends PureComponent {
  state = {
    commentBody: ''
  };

  handleChangeComment = event => {
    this.setState({commentBody: event.target.value});
  };

  handleKeyDown = event => {
    const {addComment} = this.props;
    const {commentBody} = this.state;
    if (event.keyCode === 13) {
      addComment(commentBody);
      this.setState({commentBody: ''});
    }
  };
  render() {
    const {comments} = this.props;
    return (
      <main>
        <input
          value={this.state.commentBody}
          onChange={this.handleChangeComment}
          onKeyDown={this.handleKeyDown}
        />
        {comments.map((comment, i) => (
          <section key={[comment, i].join('_')}>
            <p>{comment}</p>
          </section>
        ))}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  commentsCount: getCommentsCounts(state),
  comments: getComments(state)
});

const mapDispatchToProps = {
  addComment
};

const AppWithRedux = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

ReactDOM.render(
  <Provider store={store}>
    <AppWithRedux />
  </Provider>,
  document.getElementById('root')
);
