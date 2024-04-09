// directly extracting methods
const {readFileSync,writeFileSync, read} = require("fs");
const first = readFileSync("./content/subfolder/first.txt",'utf-8');
const second = readFileSync("./content/subfolder/second.txt",'utf-8');
const third = writeFileSync("./content/subfolder/third.txt","\nThis is the third file, Created using writefilesync.",{flag:'a'});

