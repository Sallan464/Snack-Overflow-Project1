const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser());

const cors = require('cors');
app.use(cors());

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(__dirname));

// port set by Heroku or 8080
const port = process.env.PORT || 8080

// tmp data
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

    let uploadedFile;
    let uploadPath;

    try {
        if (!req.files) {
            return res.send({
                status: false,
                message: 'No file uploaded'
            });
        }

        // Do stuff with file here –> upload copy to S3
        uploadedFile = req.files.image;
        console.log(uploadedFile);
        uploadPath = __dirname + '/tmp/' + uploadedFile.name;

        uploadedFile.mv(uploadPath, (err) => {
            res.status(500).send(err);
        });

        res.send({
            status: true,
            message: 'File is uploaded',
            body: req.body
        });

    } catch (err) {
        console.log(err.message);
        res.status(500).send(err);
    }
});

app.post('/new-post-data', async (req, res) => {
    // console.log(req.body);
    res.send({
        status: true,
        message: req.body,
        body: req.body
    });
});