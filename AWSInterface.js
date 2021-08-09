const aws = require('aws-sdk');
// const config = require('./config.json');

const config = {
    aws: {
        // IAM: 'snackoverflowuser'
        accessKeyId: "AKIA46SV5NKP6CA4LQEZ",
        secretAccessKey: "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",
        bucketname: 'snackoverflow-storage',
        filekey: 'snackoverflowposts.json'
    }
};

async function authenticateAWS() {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey,
            region: 'eu-west-2'
        });
    } catch (err) {
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

// Dummy data below ~~~~ //
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

// fetchPostsFromS3().then(resp => console.log(resp));

module.exports = fetchPostsFromS3;