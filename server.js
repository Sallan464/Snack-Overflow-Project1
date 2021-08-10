const express = require('express');
const app = express();
const cors = require('cors');


const fileUpload = require('express-fileupload');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const _ = require('lodash');
const { fakeData } = require('./frontend/src/data/Posts');



// port set by Heroku or 8080
const port = process.env.PORT || 8080

// use to connect to front end files once we merge the branches
app.use(cors());
app.use(express.static(__dirname));

//

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

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
    res.send(fakeData)
})

// app.post('/refresh-posts', async (req, res) => {

// })

app.put('/update-post-score', async (req, res) => {
    //get the id and the new score
    //send it to the server
})

app.post('/new-post', async (req, res) => {
    try {
        if (!req.files) {
            res.send({
                status: false,
                message: 'No file uploaded'
            });
        } else {
            //Use the name of the input field (i.e. "avatar") to retrieve the uploaded file
            // let avatar = req.files.avatar;

            //Use the mv() method to place the file in upload directory (i.e. "uploads")
            // avatar.mv('./uploads/' + avatar.name);

            //send response
            res.send({
                status: true,
                message: 'File is uploaded',
                body: req.body
                // data: {
                //     name: avatar.name,
                //     mimetype: avatar.mimetype,
                //     size: avatar.size
                // }
            });
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// We need this to build our post string
// var querystring = require('querystring');
// var http = require('http');
// var fs = require('fs');

// function PostCode(codestring) {
//     // Build the post string from an object
//     var post_data = querystring.stringify({
//         'compilation_level': 'ADVANCED_OPTIMIZATIONS',
//         'output_format': 'json',
//         'output_info': 'compiled_code',
//         'warning_level': 'QUIET',
//         'js_code': codestring
//     });

//     // An object of options to indicate where to post to
//     var post_options = {
//         host: 'closure-compiler.appspot.com',
//         port: '80',
//         path: '/compile',
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Content-Length': Buffer.byteLength(post_data)
//         }
//     };

//     // Set up the request
//     var post_req = http.request(post_options, function (res) {
//         res.setEncoding('utf8');
//         res.on('data', function (chunk) {
//             console.log('Response: ' + chunk);
//         });
//     });

//     // post the data
//     post_req.write(post_data);
//     post_req.end();

// }

