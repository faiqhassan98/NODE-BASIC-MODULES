const path = require('path');

//basename
console.log("basename is: " + path.basename('/node/path/path.js'));
console.log("basename is: " + path.basename('/node/path/path.js', '.js'));

//directory
console.log("Directory is: " + path.dirname(__filename));

//extension
console.log("Extension is: " + path.extname(__filename));

//join
console.log(path.join('locald/new', 'folder', 'main-path'));
console.log(path.join('locald/new', 'folder', 'main-path', '..'));

//normalize
console.log(path.normalize('d:\\temp\\\\folder\\index.js\\new'));
console.log(path.normalize('d:\\temp\\\\folder\\index.js\\new,\\..\\'));
console.log(path.normalize('d:\\temp\sdjsks//dsjadj/isdjs\\index.js'));

//parse
console.log(path.parse(__filename));

//Absolute
console.log(path.isAbsolute('d:\\temp\sdjsks//dsjadj/isdjs\\index.js'));
