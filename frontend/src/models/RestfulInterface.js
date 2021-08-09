import { fakeData } from "../data/Posts";

class RestfulInterface {

    constructor() {
        // this._apiURL = "http://localhost:8000/";
        // this._allPostsEndpoint = "";
    }

    static async refreshPosts() {
        // temporary hardcoding of url
        const data = await fetch('http://localhost:8000/info');
        const text = await data.text();
        console.log(text);
    }

    static async updatePostByID(id) {
        //
        console.log('updatePostByID not implemented')
    }
}

export default RestfulInterface;
