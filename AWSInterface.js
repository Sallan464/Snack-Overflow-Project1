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

async function fetchPostsFromS3() {
    try {
        aws.config.setPromisesDependency();
        aws.config.update({
            accessKeyId: config.aws.accessKey,
            secretAccessKey: config.aws.secretKey,
            region: 'eu-west-2'
        });

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
};

module.exports = fetchPostsFromS3;