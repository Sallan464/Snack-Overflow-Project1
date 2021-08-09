import React from 'react';
import CreatePostForm from './components/CreatePostForm';
import CardList from './containers/CardList';
import Header from './containers/Header';
import Main from './containers/Main';
import RestfulInterface from './models/RestfulInterface';

class AppContent extends React.Component {

    constructor() {
        super();
        this.isCreatePostSelectedToggler = this.isCreatePostSelectedToggler.bind(this);
        this.state = { isCreatePostSelected: false };
    }

    // componentDidMount() {
    //     this.restfulInterface.fetchPosts();
    // }

    isCreatePostSelectedToggler() {
        this.setState({
            isCreatePostSelected: this.state.isCreatePostSelected ? false : true
        })
    }

    render() {
        return (
            <React.Fragment>
                <Header isCreatePostSelectedToggler={this.isCreatePostSelectedToggler}
                    isCreatePostSelected={this.state.isCreatePostSelected} />
                <Main content={
                    this.state.isCreatePostSelected ?
                        <CreatePostForm isCreatePostSelectedToggler={this.isCreatePostSelectedToggler} />
                        :
                        <CardList />
                }
                />
            </React.Fragment>

        )
    }
}


function App() { return (<AppContent />); }

export default App;
