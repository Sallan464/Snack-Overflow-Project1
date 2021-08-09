const express = require('express');
const app = express();
const cors = require('cors');

// port set by Heroku or 8080
const port = process.env.PORT   || 8080

// use to connect to front end files once we merge the branches
app.use(express.static(__dirname));

let posts = [
    {"https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg": "chicken triangle with dip"},
    {"https://img.taste.com.au/c33UcYVI/taste/2016/11/giant-club-sandwich-110755-1.jpeg": "big boi chicken bacon lettuce thing"},
    {"https://assets.bonappetit.com/photos/57aca69153e63daf11a4d915/5:4/w_3515,h_2812,c_limit/california-veggie-sandwich.jpg": "california veggie"},
    {"https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg": "ham triangle with crisps"},
];

//routes
app.get("/", cors(), (req, res) => {
    res.send("index");
})

app.listen(port, ()=>{
    console.log("app is running");
})

app.get("/info", cors(), (req, res) => {
    res.send(posts)
})

