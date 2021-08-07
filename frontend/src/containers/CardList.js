import Card from '../components/Card';
import posts from '../data/Posts';

function RenderCardList() {//cards }) {

    //temp
    const id = 0;

    return (
        <ul>
            {
                posts.map(post => {
                    return <Card
                        key={post.id}
                        imageURL={post.imageURL}
                        caption={post.caption}
                        score={post.score} />
                })
            }
        </ul>
    )
}

export default RenderCardList