import React from "react";
import { render } from "react-dom";

class CommentBox extends React.Component {
    constructor() {
      super();
      
      this.state = {
        showComments: false,
        comments: [ ]
      };
    }
    
    // renders comment box - comments are the list of comments; if the state of the button click is showing comments, button will show hide comments
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      //HTML for comment box - the add comment section is handled in the addComment section
      return(
        <div className="comment-box">
          <h2>Rate/Roast Your Snacks!</h2>
          <CommentForm addComment={this._addComment.bind(this)}/> ////bind is a function, so when its called, it sets the comment to provided value from client. Bind will set the value of the comment to how it was added regardless of when/how the addComment function is called
          <button id="comment-reveal" onClick={this._handleClick.bind(this)}>
            {buttonText}
          </button>
          <h3>Comments</h3>
          <h4 className="comment-count">
            {this._getCommentsTitle(comments.length)}
          </h4>
          {commentNodes}
        </div>  
      );
    } // end render
    
    // Add Comments. the comment variable is the comment someone will type in
    _addComment(body) { //this is where the bind on line 27 comes in
      const comment = {
        id: this.state.comments.length + 1,
        body
      };
      this.setState({ comments: this.state.comments.concat([comment]) }); // *new array references help React stay fast, so concat works better than push here.
    }
    
    _handleClick() {
      this.setState({
        showComments: !this.state.showComments
      });
    }
    
    _getComments() {    
      return this.state.comments.map((comment) => { 
        return (
          <Comment 
            body={comment.body} 
            />
        ); 
      });
    }
    
    _getCommentsTitle(commentCount) {
      if (commentCount === 0) {
        return 'No comments yet';
      } else if (commentCount === 1) {
        return "1 comment";
      } else {
        return `${commentCount} comments`;
      }
    }
  } // end CommentBox component
  
  class CommentForm extends React.Component {
    render() {
      return (
        <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            <textarea placeholder="Comment" rows="4" required ref={(textarea) => this._body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button type="submit">Post Comment</button>
          </div>
        </form>
      );
    } // end render
    
    _handleSubmit(event) { 
      event.preventDefault();   // prevents page from reloading on submit
      let body = this._body;
      this.props.addComment(body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-body">- {this.props.body}</p>
        </div>
      );
    }
  }
  
  ReactDOM.render(<CommentBox />, document.getElementById('index'));
