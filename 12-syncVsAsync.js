// const {readFileSync,writeFileSync, read} = require("fs");
// console.log("start;");
// const first = readFileSync("./content/subfolder/first.txt",'utf-8');
// const second = readFileSync("./content/subfolder/second.txt",'utf-8');

// writeFileSync("./content/subfolder/result-sync.txt","This is the result sync text file.",{flag:'a'});
// console.log("done with this task");
// console.log("starting the next task");

const {readFile,writeFile} = require('fs');
console.log("Start");
readFile("./content/subfolder/first.txt",'utf-8',(err,result)=>{
    if(err){
        console.log(err);
        return null;
    }
    console.log(result.toString());
})
writeFile("./content/subfolder/result-async.txt","This is the third file. Created using async fs",(err,result)=>{
    if(err){
        console.log(err);
        return null;
    }
    console.log(result);
})
console.log("done with this task");
console.log("starting the next task");

