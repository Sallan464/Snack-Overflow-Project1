function Card({ score, imageURL }) {
    return (
        <li id="card-1" className="card d-flex flex-row">
            <div
                className="card-control-panel h-100 d-flex flex-column justify-content-around align-items-center">

                <p className="pt-4">{score >= 0 ? `+${score}` : `-${score}`}</p>

                <button className="btn btn-outline-success">
                    <i className="fa fa-thumbs-up fa-2x"></i>
                </button>

                <button className="btn btn-outline-warning">
                    <i className="fa fa-mitten fa-2x"></i>
                </button>

                <button className="btn btn-outline-danger">
                    <i className="fa fa-thumbs-down fa-2x"></i>
                </button>
            </div>
            <div className="card-content w-100" style={{
                backgroundImage: `url(${imageURL})`, height: "300px", backgroundRepeat: "no-repeat"
            }}></div>
        </li>
    )
}

export default Card;