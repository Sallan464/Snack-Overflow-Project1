import { fakeData } from "../data/Posts";

class RestfulInterface {

    constructor() {
        // this._apiURL = "http://localhost:8000/";
        // this._allPostsEndpoint = "";
    }

    static async refreshPosts() {
        // temporary hardcoding of url
        //const data = await fetch('http://localhost:8000/');

        //fetch('https://the-artist-fka-snack-overflow.herokuapp.com/info', {
        fetch('http://localhost:8080', {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
                Accept: 'application/json',
            },
        },
        ).then(response => {
            console.log('test');
            console.log(response);
            if (response.ok) {
                response.json().then(json => {
                    console.log(json);
                });
            }
        });


        // //
        // console.log("before fetch");
        // const data = await fetch('https://the-artist-fka-snack-overflow.herokuapp.com/info');
        // console.log(data);
        // console.log("where is my response?!?");
        //const text = await data.text();
        // console.log(text);
    }

    static async updatePostByID(id) {
        //
        console.log('updatePostByID not implemented')
    }
}

export default RestfulInterface;
