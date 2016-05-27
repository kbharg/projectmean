var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var AboutSchema = new mongoose.Schema({
    name: String,
    image: String,
    
});

mongoose.model('About', AboutSchema);

