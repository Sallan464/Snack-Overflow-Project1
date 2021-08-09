class Post {

    constructor(imageURL, caption) {
        this.imageURL = imageURL;
        this.caption = caption;
        this._score = 0;
        this._id = 0;
    }

    static newPost(imageURL, caption) {
        return new Post(imageURL, caption);
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