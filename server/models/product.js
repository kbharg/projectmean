var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ProductSchema = new mongoose.Schema({
    product_name: String,
    image: String,
    description: String,
    price: Number,
    quantity: Number,
    _user: {type: Schema.Types.ObjectId, ref: 'User'},
    details : String,
});

mongoose.model('Product', ProductSchema);

ProductSchema.path('product_name').required(true, 'name cannot be blank');
ProductSchema.path('description').required(true, 'description cannot be blank');