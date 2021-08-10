//const posts = require('../data/Posts')
let idCounter;


class Post {
    static idCounter = 0;
    constructor(imageURL, caption, score = 0, date = new Date (), id) {
        this.id = ++Post.idCounter;
        this._date = date;
        this._score = score;
        this.imageURL = imageURL;
        this.caption = caption;
        this.comments = [];
    }

    static newPost(imageURL, caption) {
        return new Post(imageURL, caption);
    }

    static newPostFromJson(json) {
        return new Post(json.imageURL, json.caption, json.score, json.id, json.date)
    }

    static toJson() {
        return {
            'id': this._id,
            'date': this._date,
            'score': this._score,
            'imageURL': this.imageURL,
            'caption': this.caption,
            'comments': this.comments
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