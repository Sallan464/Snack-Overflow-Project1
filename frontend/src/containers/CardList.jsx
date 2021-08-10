import React from 'react';
import Card from '../components/Card';
import { getSortedPosts, posts } from '../data/Posts';
import RestfulInterface from '../models/RestfulInterface';

class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        RestfulInterface.refreshPosts();
        this.posts = getSortedPosts();
    }

    rerenderParentCallback() {
        RestfulInterface.refreshPosts();
        this.posts = getSortedPosts();
        this.forceUpdate();
    }

    componentDidMount() {
    }

    render() {
        return (
            <ul>
                {
                    this.posts.map(post => {
                        return <Card
                            key={this.posts.indexOf(post)}
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