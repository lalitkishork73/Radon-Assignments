'use-strict';
const fs= require('fs');
const readline= require('readline');
const {google}= require('googleapis');
const GOOGLE_API_FOLDER_ID='1gBDeJ6ggp0Y95IAQUmgwaONrnP7FFz_U'; 
 
console.log('Uploading files');
const uploadFiles=async()=>{
    try{

        const auth=new google.auth.GoogleAuth({
            keyFile: '../googlekey.json',
            scopes:['https://www.googleapis.com/auth/drive']
        });

        const driveService=google.drive({
            version: 'v3',
            auth
        });
        
        const fileMetaData={
            'name':'myimg.jpg',
            'parents':[GOOGLE_API_FOLDER_ID]
        }

        const media={
            mimeType:'image/jpg',
            body:fs.createReadStream('../myimg.jpg')
        }

        const response=await driveService.files.create({
            resource:fileMetaData,
            media:media,
            fields:'id'
        });

        return response.data.id
 
    }
    catch(err){
        console.log(err.message);
    }
}

uploadFiles().then((data)=>{
    console.log(data);
})