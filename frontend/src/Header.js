import icon from './icon.png';

function Header() {
    return (
        <header>
            <nav className="navbar navbar-light bg-light">
                <a className="navbar-brand" href="#">
                    <img id="navbar-icon" src={icon} alt="stackoverflow icon" />
                    SnackOverflow
                </a>
                <button className="btn btn-outline-success my-2 my-sm-0">
                    <i className="fas fa-plus"></i>
                </button>
            </nav>
        </header>
    )
}

export default Header;