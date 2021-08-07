import React from 'react';
import Card from '../components/Card';
import { getSortedPosts, posts } from '../data/Posts';

class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
    }

    rerenderParentCallback() {
        // TODO: call resort logic here
        // then rerender;
        this.forceUpdate();
    }

    render() {
        return (
            <ul>
                {
                    posts.map(post => {
                        return <Card
                            key={post.id}
                            imageURL={post.imageURL}
                            caption={post.caption}
                            score={post.score}
                            rerenderParentCallback={this.rerenderParentCallback} />
                    })
                }
            </ul >
        )
    }
}

export default CardList