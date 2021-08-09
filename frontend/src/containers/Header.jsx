import React from 'react';
import icon from '../icon.png';
import * as ReactBootStrap from "react-bootstrap";

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
                    <button id="navbar-brand" className="navbar-brand" onClick={this.props.isCreatePostSelectedToggler}>
                        <img id="navbar-icon" src={icon} alt="stackoverflow icon" />
                        SnackOverflow
                    </button>
                    <button onClick={this.props.isCreatePostSelectedToggler} className="btn btn-outline-success my-2 my-sm-0">
                        {this.props.isCreatePostSelected ?
                            (<i className="fas fa-minus"></i>) :
                            (<i className="fas fa-plus"></i>)}
                    </button>

                    <button class="navbar-toggler second-button flex-end" 
                    type="button" 
                    data-toggle="collapse" 
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false" 
                    ria-label="Toggle navigation">
                        <div class="animated-icon"><span></span><span></span><span></span><span></span>
                        </div>
                    </button>

                    <div class="collapse navbar-collapse px-4" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                         <li class="nav-item px-2">
                             <a class="nav-link" href="#">Newest Snaccs</a>
                         </li>
                         <li class="nav-item px-2">
                             <a class="nav-link" href="#">Top Snaccs</a>
                         </li>
                         <li class="nav-item px-2">
                             <a class="nav-link" href="#">Hot Snaccs</a>
                         </li>
                         <li class="nav-item px-2">
                             <a class="nav-link" href="#">Not Snaccs</a>
                         </li>
                    </ul>
                    </div>
                </nav>
            </header> 
        )
    }
}

export default Header;