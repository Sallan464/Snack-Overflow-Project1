import React from 'react';
import Card from '../components/Card';
import { getSortedPosts } from '../data/Posts';
import RestfulInterface from '../models/RestfulInterface';

class CardList extends React.Component {

    constructor(props) {
        super(props);
        this.rerenderParentCallback = this.rerenderParentCallback.bind(this);
        RestfulInterface.getPosts();
        this.state = { posts: props.posts}
        console.log("rendering the posts " + posts);
    }

    rerenderParentCallback() {
        RestfulInterface.getPosts();
        this.setState({posts: getSortedPosts()})
        this.posts = getSortedPosts();
        this.forceUpdate();
        console.log("it is also reaching here" + this.posts)
    }

    componentDidMount() {
    }

    render() {
        return (
            <ul>
                {
                    this.posts.map(post => {
                        console.log("putting posts into the component" + post);
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

export default CardList;