import React from 'react';
import Card from '../components/Card';
import { getSortedPosts, posts } from '../data/Posts';

class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        this.posts = getSortedPosts();
    }

    rerenderParentCallback() {
        this.posts = getSortedPosts();
        this.forceUpdate();
    }

    render() {
        return (
            <ul>
                {
                    this.posts.map(post => {
                        return <Card
                            // key={this.posts.indexOf(post)}
                            post={post}
                            posts={posts}
                            rerenderParentCallback={this.rerenderParentCallback} />
                    })
                }
            </ul >
        )
    }
}

export default CardList