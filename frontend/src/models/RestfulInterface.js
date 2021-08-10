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
                response.json()
                .then()
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
            body: JSON.stringify(dataToPost)
        })
            .then(resp => console.log(`request succeeded with response ${resp}`))
            .catch(err => console.log(`request failed: ${err}`));
    }

    static updateScore (id, score) {    
        fetch('http://localhost:8080/update-post-score',{
        method: 'POST',
        headers: {
            "Content-type": "application/json"
        }, 
        body: `{"id": ${id}, "score": ${score}}`}
        );
    }


    static getPosts () { 
         fetch('http://localhost:8080/get-posts', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        },
        ).then(response => {
            if (response.ok) {
                response.json()
                .then(createData)
            }
        });

    }

    static async saveNewPost(post) {
        // send all posts data
        let dataToPost = { 'posts': posts };
        // plus image file

        // fetch('https://the-artist-fka-snack-overflow.herokuapp.com/new-post', {
        fetch('http://localhost:8080/new-post', {
            method: 'Post',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(dataToPost)
        })
            .then(resp => console.log(`request succeeded with response ${resp}`))
            .catch(err => console.log(`request failed: ${err}`));
    }
}

function createData(data) {
    console.log(data);
    for(let i=0; i< data.length; i++) {
        posts[i] = new Post(data[i].imageURL, data[i].caption, 0, data[i].date = new Date(), data[i].id);
    }
    console.log(posts);
    return posts;
}

export default RestfulInterface;

