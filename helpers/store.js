//import 
const fs = require('fs');
const util = require('util');
const uuid = require('uuid');
// Promise version of fs.readFile/writefile to make them async
const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);