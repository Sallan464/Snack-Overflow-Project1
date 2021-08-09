const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());



// port set by Heroku or 8080
const port = process.env.PORT || 8080

// use to connect to front end files once we merge the branches
app.use(cors());
app.use(express.static(__dirname));



let posts = [
    { imageURL: "https://realfood.tesco.com/media/images/RFO-1400x919-ChickenClubSandwich-0ee77c05-5a77-49ac-a3bd-4d45e3b4dca7-0-1400x919.jpg", caption: "chicken triangle with dip" },
    { imageURL: "https://img.taste.com.au/c33UcYVI/taste/2016/11/giant-club-sandwich-110755-1.jpeg", caption: "big boi chicken bacon lettuce thing" },
    { imageURL: "https://assets.bonappetit.com/photos/57aca69153e63daf11a4d915/5:4/w_3515,h_2812,c_limit/california-veggie-sandwich.jpg", caption: "california veggie" },
    { imageURL: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg", caption: "ham triangle with crisps" },
];

//routes
app.get("/", (req, res) => {
    res.send("index");
})

app.listen(port, () => {
    console.log("app is running");
})

<<<<<<< HEAD
app.get("/info", (req, res) => {
=======
app.get("/info",  (req, res) => {
>>>>>>> 0db0438569febdfd21cd274165211cb71ccd512a
    res.send(posts)
})

