import React from "react";
// import { getSortedPosts } from "../data/Posts";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.onIncrBtnClick = this.onIncrBtnClick.bind(this);
        this.onDecrBtnClick = this.onDecrBtnClick.bind(this);
        this.onResetBtnClick = this.onResetBtnClick.bind(this);
        this.state = {
            post: props.post,
            score: props.post.score,
            hasBeenIncremented: false,
            hasBeenDecremented: false
        };
    }

    isHighestScore() {
        return this.props.posts.indexOf(this.props.post) == 0 ? true : false;
    }

    isLowestScore() {
        return this.props.posts.indexOf(this.props.post) == this.props.posts.length - 1 ? true : false;
    }


    // TODO: Issue here when parent re-renders these, state is reset.
    //       Therefore, setState logic is broken: i.e. cannot check user's
    //       past voting on individual post after re-render.

    onIncrBtnClick() {
        // if user has not already selected upvote
        if (!this.state.hasBeenIncremented) {
            // if user has previously selected downvote, add 2 to correct their vote 
            this.setState({
                score: this.state.hasBeenDecremented ?
                    this.state.score + 2 : this.state.score + 1,
                hasBeenIncremented: true,
                hasBeenDecremented: false
            })

            // update post list by incrementing post score
            this.props.posts[this.props.posts.indexOf(this.props.post)].incrementScore();

            this.props.rerenderParentCallback();
            this.forceUpdate();
        }
    }

    onDecrBtnClick() {
        if (!this.state.hasBeenDecremented) {
            // if user has previously selected upvote, remove 2 to correct their vote 
            this.setState({
                score: this.state.hasBeenIncremented ?
                    this.state.score - 2 : this.state.score - 1,
                hasBeenIncremented: false,
                hasBeenDecremented: true
            });

            // update post list by incrementing post score
            this.props.posts[this.props.posts.indexOf(this.props.post)].decrementScore();

            this.props.rerenderParentCallback();
            this.forceUpdate();
        }
    }

    onResetBtnClick() {
        if (this.state.hasBeenDecremented || this.state.hasBeenIncremented) {
            this.setState({
                score: this.state.hasBeenIncremented ?
                    this.state.score - 1 : this.state.score + 1,
                hasBeenIncremented: false,
                hasBeenDecremented: false
            });
            this.props.rerenderParentCallback();
        }
    }

    render() {
        return (
            <li id="card-1" className="card d-flex flex-row">
                <div className="card-control-panel h-100 d-flex flex-column justify-content-around align-items-center"
                    style={{
                        ...(this.isHighestScore() ? {
                            backgroundColor: 'rgb(214,198,95)' // gold
                        } : {}),
                        ...(this.isLowestScore() ? {
                            backgroundColor: 'rgb(226,100,74)' // red
                        } : {})
                    }} >

                    <p className="pt-4">{this.props.post.score >= 0 ? `+${this.props.post.score}` : `${this.props.post.score}`}</p>

                    <button className="btn btn-outline-success" onClick={this.onIncrBtnClick}>
                        <i className="fa fa-thumbs-up fa-2x"></i>
                    </button>

                    <button className="btn btn-outline-warning" onClick={this.onResetBtnClick}>
                        <i className="fa fa-mitten fa-2x"></i>
                    </button>

                    <button className="btn btn-outline-danger" onClick={this.onDecrBtnClick}>
                        <i className="fa fa-thumbs-down fa-2x"></i>
                    </button>
                </div>
                <div className="card-content w-100" style={{
                    backgroundImage: `url(${this.props.post.imageURL})`, height: "300px", backgroundRepeat: "no-repeat"
                }}>

                </div>
            </li >
        )
    }
}

export default Card;