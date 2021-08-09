import { fakeData } from "../data/Posts";

class RestfulInterface {

    static async refreshPosts() {
        const data = await fetch('https://api.github.com/users/hacktivist123/repos');
        const json = await data.json();
        // temp here
        fakeData.push(json);
    }

    static async updatePostByID(id) {
        //
        console.log('updatePostByID not implemented')
    }
}

export default RestfulInterface;
