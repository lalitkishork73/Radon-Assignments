const aws = require('aws-sdk');

// First step Configuration in simple words login with AWS
aws.config.update({
    accessKeyId: process.env.AWS_ID,
    secretAccessKey: process.env.AWS_SECRET_KEY,
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

