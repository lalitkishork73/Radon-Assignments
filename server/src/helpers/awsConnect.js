const aws = require('aws-sdk');

// First step Configuration in simple words login with AWS
aws.config.update({
    accessKeyId: "AKIAR7VN4HY7UGJZDEE2",
    secretAccessKey: "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",
  });


// uplload Document

const uploadfile=async(files)=>{
    return new Promise((resolve,reject)=>{
        let S3=new aws.S3({ apiVersion:"2006-03-01"});

        let uploadParams={
            Bucket:"bucketwala",
            key:"me/"+files.name,
            Body:files.buffer,
        }

        S3.upload(uploadParams,(err,data)=>{
            if(err){
                return reject(err);
            }
            else{
                return resolve(data.Location);
        }
    })
});

}

module.exports = {uploadfile};

