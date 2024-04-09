const {readFile,writeFile} = require('fs');

readFile("./content/subfolder/first.txt",'utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return null;
    }
    console.log(result.toString());
})
writeFile("./content/subfolder/third-async.txt","This is the third file. Created using async fs",(err,result)=>{
    if(err){
        console.log(err);
        return null;
    }
    console.log(result);
})