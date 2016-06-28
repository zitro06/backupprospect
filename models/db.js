var mongoose = require( 'mongoose' );

var dbURI = 'mongodb://localhost/prospect';
mongoose.connect(dbURI);

mongoose.connection.on('connected', function () {
  console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error',function (err) {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
  console.log('Mongoose disconnected');
});

// BRING IN YOUR SCHEMAS & MODELS
require('./prospectUser');
