var mongoose = require('mongoose');
var validate = require('mongoose-validator');
var Schema = mongoose.Schema;


var nameValidator = [
  validate({
    validator: 'isLength',
    arguments: [3, 50],
    error: 'Name should be between {ARGS[0]} and {ARGS[1]} characters'
  })
];



var UserSchema = new mongoose.Schema({
  	username: {type: String, required: true, validate: nameValidator},
  	date: {type:Date, default:Date.now},
     // cart: {type: Array, Number: 4 },
     cart: [{type: Schema.Types.ObjectId, ref: 'Product'}],
     products: [{type: Schema.Types.ObjectId, ref: 'Product'}],
     _item: {type: Schema.Types.ObjectId, ref: 'Item'},
     password: String,
     email: String,
});

mongoose.model('User', UserSchema);







