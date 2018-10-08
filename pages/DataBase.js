//Requiring the package
var PouchDB = require('PouchDB');



//Creating the database object
var db = new PouchDB('http://localhost:5984/nomadher');

//Database information
db.info(function(err, info) {
   if (err) {
      return console.log(err);
   } else {
      console.log(info);
   }
});