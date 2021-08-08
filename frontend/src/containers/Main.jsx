import React from 'react';

class Main extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <main>
                <div className="container">
                    <div className="row">
                        <div className="col mx-auto">
                            {this.props.content}
                        </div>
                    </div>
                </div>
            </main >
        )
    }
}


export default Main;