import { posts } from "../data/Posts";
import Post from "./Post";

class RestfulInterface {

    static refreshPosts() {
        // Live API or Local
        //fetch('https://the-artist-fka-snack-overflow.herokuapp.com/info', { //should change endpoint name to get or get-posts
        fetch('http://localhost:8080/get-posts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        },
        ).then(response => {
            if (response.ok) {
                response.json().then(json => {
                    // empty array
                    // while (posts.length > 0) {
                    //     posts.pop();
                    // }
                    // repopulate
                    for (let i = 0; i < json.length; i++) {
                        posts.push(Post.newPost(json[i].imageURL, json[i].caption))
                    }
                });
            }
        });
    }

    static async updatePosts() {
        let dataToPost = { 'posts': posts };
        // fetch('https://the-artist-fka-snack-overflow.herokuapp.com/update-posts', {
        fetch('http://localhost:8080/update-posts', {
            method: 'Post',
            headers: {
                "Content-type": "application/json"
            },
            body: dataToPost
        })
            .then(resp => console.log(`request succeeded with response ${resp}`))
            .catch(err => console.log(`request failed: ${err}`));
    }

    static async saveNewPost(postData) {
        // send all posts data
        // let dataToPost = { 'posts': posts };
        // plus image file

        // fetch('https://the-artist-fka-snack-overflow.herokuapp.com/new-post', {
        fetch('http://localhost:8080/new-post', {
            method: 'Post',
            headers: {
                "Content-type": "application/json"
            },
            // body: JSON.stringify(dataToPost)
            body: postData,
        })
            .then(resp => console.log(`request succeeded with response ${resp}`))
            .catch(err => console.log(`request failed: ${err}`));
    }
}

export default RestfulInterface;
