const express = require('express');

const router = express.Router();

router.get("/", (req, res) => {
    res.send(posts);
})

router.post("/post", (req, res) => {
    // to be replaced requestawsthing(res)
})

router.put("/increment", (req, res) => {
    // function increment(res)
})

router.put("/decrease", (req, res) => {
    // function decrease(res)
})

router.put("/comment", (req, res) => {
    // function comment(res)
})



// score and comments


module.exports = router;


let posts = [
    {imageURL: "https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg",caption: "chicken triangle with dip"},
    {imageURL: "https://img.taste.com.au/c33UcYVI/taste/2016/11/giant-club-sandwich-110755-1.jpeg", caption: "big boi chicken bacon lettuce thing"},
    {imageURL: "https://assets.bonappetit.com/photos/57aca69153e63daf11a4d915/5:4/w_3515,h_2812,c_limit/california-veggie-sandwich.jpg", caption: "california veggie"},
    {imageURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg", caption: "ham triangle with crisps"},
];