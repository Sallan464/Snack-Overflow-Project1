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
}

export default RestfulInterface;
