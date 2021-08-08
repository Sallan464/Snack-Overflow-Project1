import React from 'react';
import icon from '../icon.png';

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = { isCreatePostSelected: props.isCreatePostSelected };
    }

    // createPostButtonHandler() {
    //     this.props.isCreatePostSelectedToggler();
    //     this.setState({ isCreatePostSelected: this.state.isCreatePostSelected ? false : true });
    // }

    render() {
        return (
            <header>
                <nav className="navbar navbar-light bg-light fixed-top">
                    <a className="navbar-brand" href="#">
                        <img id="navbar-icon" src={icon} alt="stackoverflow icon" />
                        SnackOverflow
                    </a>
                    <button onClick={this.props.isCreatePostSelectedToggler} className="btn btn-outline-success my-2 my-sm-0">
                        {this.props.isCreatePostSelected ?
                            (<i className="fas fa-plus"></i>) :
                            (<i className="fas fa-minus"></i>)}
                    </button>
                </nav>
            </header >
        )
    }
}

export default Header;