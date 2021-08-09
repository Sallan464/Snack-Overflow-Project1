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
    
    render () {
      const comments = this._getComments();
      let commentNodes;
      let buttonText = 'Show Comments';
      
      if (this.state.showComments) {
        buttonText = 'Hide Comments';
        commentNodes = <div className="comment-list">{comments}</div>;
      }
      
      return(
        <div className="comment-box">
          <h2>Join the Discussion!</h2>
          <CommentForm addComment={this._addComment.bind(this)}/>
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
    
    _addComment(author, body) {
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
      let author = this._author;
      let body = this._body;
      this.props.addComment(author.value, body.value);
    }
  } // end CommentForm component
  
  class Comment extends React.Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
        </div>
      );
    }
  }
  
  ReactDOM.render(<CommentBox />, document.getElementById('main'));


//   render() {
//     return (
//       <form className="comment-form" onSubmit={this._handleSubmit.bind(this)}>
//         <div className="comment-form-fields">
//           <textarea
//             placeholder="Comment:"
//             ref={textarea => (this._body = textarea)}
//           />
//         </div>
//         <div className="comment-form-actions">
//           <button type="submit">Post Comment</button>
//         </div>
//       </form>
//     );
//   }

//   _handleSubmit(event) {
//     event.preventDefault();

//     let body = this._body;

//     this.props.addComment(body.value);
//   }
// }

// class CommentBox extends React.Component {
//   constructor() {
//     super();

//     this.state = {
//       showComments: false,
//       comments: [
//         {        }
//       ]
//     };
//   }

//   // Get Comments
//   _getComments() {

//     return this.state.comments.map(comment => {
//       return (
//         <Comment 
//           body={comment.body} 
//           key={comment.id} />
//       );
//     });
//   }

//   _getCommentTitle(commentCount) {
//     if (commentCount === 0) {
//       return "No comments yet";
//     } else if (commentCount === 1) {
//       return "1 comment";
//     } else {
//       return `${commentCount} comments`;
//     }
//   }

//   render() {
//     const comments = this._getComments();
//     let commentNodes;
//     let buttonText = "Show comments";

//     if (this.state.showComments) {
//       buttonText = "Hide comments";
//     }
//     if (this.state.showComments) {
//       commentNodes = (
//         <div className="comment-list">
//           {comments}
//         </div>
//       );
//     }
//     return (
//       <div className="comment-box container">
//         <CommentForm addComment={this._addComment.bind(this)} />
//         <h1>
//           Comments &nbsp;
//           <small className="text-muted">
//             {this._getCommentTitle(comments.length)}
//           </small>
//         </h1>
//         <hr />
//         <button onClick={this._handleClick.bind(this)}>
//           {buttonText}
//         </button>
//         {commentNodes}
//       </div>
//     );
//   }

//   _addComment(author, body) {
//     const comment = {
//       id: this.state.comments.length + 1,
//       author,
//       body
//     };
//     this.setState({ comments: this.state.comments.concat([comment]) });
//   }

//   _handleClick() {
//     this.setState({
//       showComments: !this.state.showComments
//     });
//   }
// }
