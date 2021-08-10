const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
app.use(cors());

const fileUpload = require('express-fileupload');
// const bodyParser = require('body-parser');
// const morgan = require('morgan');
const _ = require('lodash');

// This is needed to parse the req body
app.use(bodyParser());



// port set by Heroku or 8080
const port = process.env.PORT || 8080

// use to connect to front end files once we merge the branches
app.use(cors());
app.use(express.static(__dirname));

//

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(morgan('dev'));

// enable files upload
app.use(fileUpload({
    createParentPath: true
}));



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

app.get("/get-posts", (req, res) => {
    res.send(posts)
})

app.post('/update-posts', async (req, res) => {
    try {
        res.send()
    } catch (err) {
        console.log(err);
        throw err;
    }
})

app.post('/new-post-img', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {

            // Do stuff with file here –> upload copy to S3

            res.send({
                status: true,
                message: 'File is uploaded',
                body: req.body
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
})

app.post('/new-post-data', async (req, res) => {
    console.log(req.body);
    res.send({
        status: true,
        message: req.body,
        body: req.body
    });
})