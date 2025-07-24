
// const path= require("path");


// console.log(path.dirname(__filename));
// console.log(path.extname("abc.py"));

// const moment =require("moment");
// console.log (moment().format("DD-MM-YYYY HH:MM"));
// console.log(moment().format("dddd"));



  const fs = require("fs");
//   const mydata="mca atmiya university"  
  
// fs.writeFile("test.txt", mydata, function(err) {
//   if (err) throw err;
//   console.log("File saved successfully");
// });


// fs.readFile("test.txt","utf8",function (err,data)
// {
//     if(err) throw err;
//     console.log("file",data)

// });

// fs.appendFile("test.txt","vishnu",function(err)
// {
//     if(err) throw err;
//     console.log("append")
// });

fs.unlink("box.txt",function(err){
    if(err) throw err;
    console.log("delete file ")

});