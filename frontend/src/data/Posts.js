import Post from '../models/Post';

// let posts = [
//     Post.newPost("https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg", "chicken triangle with dip"),
//     Post.newPost("https://img.taste.com.au/c33UcYVI/taste/2016/11/giant-club-sandwich-110755-1.jpeg", "big boi chicken bacon lettuce thing"),
//     Post.newPost("https://assets.bonappetit.com/photos/57aca69153e63daf11a4d915/5:4/w_3515,h_2812,c_limit/california-veggie-sandwich.jpg", "california veggie"),
//     Post.newPost("https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg", "ham triangle with crisps")
// ];
let posts = [];

const getSortedPosts = () => {
    console.log("sorting the posts");
    console.log(posts.sort((a, b) => b.score - a.score));
    return posts.sort((a, b) => b.score - a.score)
};


// DEBUG


export { posts, getSortedPosts };
