// import { posts } from '../data/Posts.js'

class Post {

    constructor(imageURL, caption, score = 0, date = new Date()) {  // id = posts.length) {
        // this._id = id;
        this._date = date;
        this._score = score;
        this.imageURL = imageURL;
        this.caption = caption;
        this.comments = [];
    }

    static newPost(imageURL, caption, score = 0, date = new Date()) {
        return new Post(imageURL, caption, score, date);
    }

    static newPostFromJson(json) {
        return new Post(json.imageURL, json.caption, json.score, json.date) // json.id, 
    }

    toJson() {
        return {
            // 'id': this._id,
            'date': `${this._date}`,
            'score': `${this._score}`,
            'imageURL': `${this.imageURL}`,
            'caption': `${this.caption}`,
            'comments': `${this.comments}`
        }
    }

    get score() {
        return this._score;
    }

    incrementScore() {
        this._score++;
    }

    decrementScore() {
        this._score--;
    }
}

export default Post;