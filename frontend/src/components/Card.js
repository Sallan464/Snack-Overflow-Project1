import React from "react";

class Card extends React.Component {

    constructor(props) {
        super(props);
        this.onIncrBtnClick = this.onIncrBtnClick.bind(this);
        this.onDecrBtnClick = this.onDecrBtnClick.bind(this);
        this.onResetBtnClick = this.onResetBtnClick.bind(this);
        this.state = {
            score: props.score,
            hasBeenIncremented: false,
            hasBeenDecremented: false
        };
    }

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

            this.props.rerenderParentCallback();
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
            this.props.rerenderParentCallback();
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
                <div
                    className="card-control-panel h-100 d-flex flex-column justify-content-around align-items-center">

                    <p className="pt-4">{this.state.score >= 0 ? `+${this.state.score}` : `${this.state.score}`}</p>

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
                    backgroundImage: `url(${this.props.imageURL})`, height: "300px", backgroundRepeat: "no-repeat"
                }}></div>
            </li>
        )
    }
}

export default Card;