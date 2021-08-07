import Card from '../components/Card';
import RenderCardList from './CardList';

// class Post {
//     constructor(args) {
//         this.args = args;
//     }

//     static newPost(args) {
//         return new Post(args)
//     }
// }

// const cards = [Post.newPost('A'), Post.newPost('B')]


function Main() {

    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col mx-auto">
                        <RenderCardList />
                    </div>
                </div>
            </div>
        </main>
    )
}


export default Main;