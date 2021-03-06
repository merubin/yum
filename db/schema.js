// connect the mongoose item
var mongoose = require('mongoose');
// mongoose.Promise = global.Promise;   // to remove warnings about Deprecation
mongoose.connect('mongodb://localhost/yum');


//connect to database
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

// Now that we're connected, let's save that connection to the database in a variable.

// Will log an error if db can't connect to MongoDB
db.on('error', err => {
  console.log(err);
});


// Now we have a restaurant and Menu  model
// First, we instantiate a namespace for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema

var MenuSchema = new Schema({
  title: String
});

var RestaurantSchema = new Schema({
  name: String,
  address: {street: String, zipcode: Number},
  yelpurl: String,
  items: [MenuSchema]
});


mongoose.Promise = global.Promise;  // to remove warnings about Deprecation

var Restaurant = mongoose.model("Restaurant",  RestaurantSchema);
var Menu = mongoose.model("Menu", MenuSchema);

module.exports = { Restaurant: Restaurant,
                   Menu: Menu };  //es6 format  make this available to seeds
