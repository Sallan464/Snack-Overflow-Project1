import Post from '../models/Post';

let posts = [
    Post.newPost("https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg", "caption 1"),
    Post.newPost("https://img.taste.com.au/c33UcYVI/taste/2016/11/giant-club-sandwich-110755-1.jpeg", "caption 2"),
    Post.newPost("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg", "caption 3")
];

const getSortedPosts = () => {
    return posts.sort((a, b) => b.score - a.score)
}

export { posts, getSortedPosts };