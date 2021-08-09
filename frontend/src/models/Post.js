class Post {

    constructor(imageURL, caption, score = 0, id = 0, date = new Date()) {
        this._id = id;
        this._date = date;
        this._score = score;
        this.imageURL = imageURL;
        this.caption = caption;
    }

    static newPost(imageURL, caption) {
        return new Post(imageURL, caption);
    }

    static newPostFromJson(json) {
        return new Post(json.imageURL, json.caption, json.score, json.id)
    }

    static toJson() {
        return {
            'id': this._id,
            'date': this._date,
            'score': this._score,
            'imageURL': this.imageURL,
            'caption': this.caption
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