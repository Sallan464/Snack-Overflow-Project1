import React from 'react';
import Card from '../components/Card';

class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        this.refreshPostsHandler = this.refreshPostsHandler.bind(this);
    }

    rerenderParentCallback() {
        this.props.refreshPostsHandler();
        this.forceUpdate();
    }

    refreshPostsHandler() {
        this.props.refreshPostsHandler();
        this.forceUpdate();
    }

    render() {
        return (
            <ul>
                {
                    this.props.posts.map(post => {
                        return <Card
                            key={post.id}
                            post={post}
                            posts={this.props.posts}
                            rerenderParentCallback={this.rerenderParentCallback} />
                    })
                }
            </ul >
        )
    }
}

export default CardList