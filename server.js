const fs = require('fs');

const express = require('express');
const app = express();

const bodyParser = require('body-parser');
app.use(bodyParser());

const cors = require('cors');
app.use(cors());

const fileUpload = require('express-fileupload');
app.use(fileUpload());
app.use(express.static(__dirname));

const { fetchPostsFromS3, uploadImageFileToS3, replaceDataInS3 } = require('./AWSInterface');

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
app.get("/get-posts", async (req, res) => {

    // First update local fs here by fetching from S3 bucket ~
    let postList = await fetchPostsFromS3();
    let postDataObj = { posts: postList };
    fs.writeFile(__dirname + '/tmp/json/posts.json', JSON.stringify(postDataObj), (err) => {
        console.log(err.message);
    });

    // Then parse string to json
    let rawData = fs.readFileSync(__dirname + '/tmp/json/posts.json');
    let postDataJson = JSON.parse(rawData);

    // NOTE: This postData is not yet formatted or validated!
    //       Expect it not to work.
    res.send(postDataJson);
})

app.post('/update-posts', async (req, res) => {
    // NOTE: this endpoint might be redundant.
    // This would be called when posts are upvoted and commented on.
    // The expected requeset body contains a single post object json.
    // This would have the same functionality as /new-post-data
    res.send(301);
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

        // Make a copy of uploaded file and send to /tmp/img/ storage
        uploadedFile = req.files.image;
        console.log(uploadedFile);
        uploadPath = __dirname + '/tmp/img/' + uploadedFile.name;

        uploadedFile.mv(uploadPath, (err) => {
            res.status(500).send(err);
        });

        // TODO: Send copy to AWS bucket here ~

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

    // Create local copy of post data
    fs.writeFile(__dirname + '/tmp/json/posts.json', JSON.stringify(req.body), (err) => {
        console.log(err.message);
    })

    // Or just append (more formatting needed)
    // fs.appendFile(__dirname + '/tmp/json/posts.json', JSON.stringify(req.body), (err) => {
    //     console.log(err.message);
    // })

    // Then send copy to S3 bucket here ~

    res.send({
        status: true,
        message: 'data upload successful',
        body: req.body
    });
});

// Listen
app.listen(port, () => {
    console.log("app is running");
})
