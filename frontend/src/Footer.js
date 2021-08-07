function Footer() {
    return (
        <footer className="page-footer font-small unique-color-dark pt-4">
            <div className="container">
                <a className="btn btn-outline-dark" href="https://stackoverflow.com/">
                    <ul className="list-unstyled list-inline text-center">
                        <li className="list-inline-item">
                            <h5 className="">Back to work!</h5>
                        </li>
                        <li className="list-inline-item">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Stack_Overflow_icon.svg/768px-Stack_Overflow_icon.svg.png"
                                alt="stackoverflow icon" />
                        </li>
                    </ul>
                </a>
            </div>

            <div className="footer-copyright text-center py-3">© 2021 Copyright:
            </div>

        </footer>
    )
}

export default Footer;