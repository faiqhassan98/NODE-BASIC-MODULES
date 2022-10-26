// const fs = require('fs');
// fs.readFile('writ-file', 'utf8', function(err, data) {
//     if (err) throw "File Not FounD";
//     console.log(data);
//   });

const fs = require('fs');
fs.readFile('write-file', 'utf8', function(err, data) {
    try{
        if (err) throw err;
    }
    catch(err){
        console.log("File Not Found")
    }
    finally{
        console.log(data);
    }
   
  });
  

  
