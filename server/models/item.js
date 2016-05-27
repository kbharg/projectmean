var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ItemSchema = new mongoose.Schema({
    product: [{type: mongoose.Schema.Types.Object, ref: 'Product'}],
    user: {type: mongoose.Schema.Types.Object, ref: 'User'},
    item_quantity: Number,
    date: {type:Date, default:Date.now}
});

mongoose.model('Item', ItemSchema);