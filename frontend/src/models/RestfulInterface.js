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
                    let retval = [];
                    for (let i = 0; i < json.length; i++) {
                        retval.push(Post.newPost(json[i].imageURL, json[i].caption))
                    }
                    return retval;
                });
            }
        });
    }
}

export default RestfulInterface;
