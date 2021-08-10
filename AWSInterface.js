const aws = require('aws-sdk');
const fs = require('fs');
const configBuffer = fs.readFileSync('credentials.json');
const config = JSON.parse(configBuffer);

async function authenticateAWS() {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey,
            region: config.aws.region
        });
    } catch (err) {
        console.log(err)
        throw err;
    }
}

async function fetchPostsFromS3() {
    try {
        await authenticateAWS();
        const s3 = new aws.S3();
        const file = await s3.getObject({
            Bucket: config.aws.bucketname,
            Key: config.aws.filekey
        }).promise();

        const postData = JSON.parse(file.Body.toString());
        return postData.posts;

    } catch (e) {
        console.log(e);
    }
}

async function replaceDataInS3(newData) {
    try {
        await authenticateAWS();
        const s3 = new aws.S3();
        const file = await s3.putObject({
            Bucket: config.aws.bucketname,
            Key: config.aws.filekey,
            Body: JSON.stringify(newData),
            ACL: 'public-read'
        }).promise();

        console.log('done');

    } catch (e) {
        console.log(e);
    }
}

// function isValidFileType(file) {
//     // TODO
//     return true;
// }

// function isFileUnderSizeThreshold(file, thresholdBytes = 3000) {
//     // TODO
//     return true;
// }

async function uploadImageFileToS3(file, key) {

    // NOTE: Checks can be handled by express middleware
    // if (!isFileUnderSizeThreshold(file)) throw Error('file too big w/e');
    // if (!isValidFileType(file)) throw Error('valid file types are ' + []);

    try {
        await authenticateAWS();
        const s3 = new aws.S3();
        await s3.putObject({
            Bucket: config.aws.bucketname,
            Key: key,
            Body: file,
            ACL: 'public-read'
        }).promise();

        console.log('done');

    } catch (e) {
        console.log(e);
    }
}

// NOTE: In Node use fs.createReadStream to convert local files to file objects
//const fs = require('fs');
//let testFile = fs.createReadStream('testimage.jpg');
//uploadImageFileToS3(testFile, 'test');
//

async function uploadNewPost() {
    // should wrap calls to uploadImageFileToS3(using data.date as key)
    // then call replaceDataInS3 with updated Json
}

// Some dummy data below ~~~~ //
const data = {
    'posts': [
        {
            'id': 0,
            'datetime': '2021-08-09T17:22:11.323Z',
            'imageURL': 's3 image url here',
            'caption': 'caption here',
            'comments': ['hey great stuff', 'another comment', 'last comment']
        },

        {
            'id': 1,
            'datetime': '2021-08-09T17:22:11.323Z',
            'imageURL': 'image 2 here',
            'caption': 'caption 2 here',
            'comments': ['hey no so great stuff', 'another bad comment', 'no comment']
        }
    ]
}

module.exports = fetchPostsFromS3;
