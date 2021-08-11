import React from 'react';
import CreatePostForm from './components/CreatePostForm';
import CardList from './containers/CardList';
import Header from './containers/Header';
import Main from './containers/Main';
import Post from './models/Post';

class AppContent extends React.Component {

    constructor() {
        super();
        this.isCreatePostSelectedToggler = this.isCreatePostSelectedToggler.bind(this);
        this.refreshPostsHandler = this.refreshPostsHandler.bind(this);
        this.state = { isCreatePostSelected: false, posts: [] };
        this.refreshPostsHandler();
    }

    refreshPostsHandler() {
        fetch('http://localhost:8080/get-posts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        }
        ).then(response => {
            if (response.ok) {
                response.json()
                    .then(json => {
                        let updatedPosts = [];
                        console.log(json.posts.length);
                        for (let i = 0; i < json.posts.length; i++) {
                            // console.log(`${json.posts[i]}`);
                            updatedPosts.push(Post.newPostFromJson(json.posts[i]));
                        }
                        console.log(json);
                        this.setState({
                            isCreatePostSelected: this.isCreatePostSelected,
                            posts: updatedPosts
                        })
                        // console.log(this.state.posts);
                    });
                this.render();
            }
        });
    }

    isCreatePostSelectedToggler() {
        this.setState({
            isCreatePostSelected: this.state.isCreatePostSelected ? false : true,
            posts: this.state.posts
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header isCreatePostSelectedToggler={this.isCreatePostSelectedToggler}
                    isCreatePostSelected={this.state.isCreatePostSelected} />
                <Main content={
                    this.state.isCreatePostSelected ?
                        <CreatePostForm posts={this.state.posts} isCreatePostSelectedToggler={this.isCreatePostSelectedToggler} />
                        :
                        <CardList posts={this.state.posts} refreshPostsHandler={this.refreshPostsHandler} />
                }
                />
            </React.Fragment>

        )
    }
}


function App() { return (<AppContent />); }

export default App;
