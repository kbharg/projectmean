var mongoose = require('mongoose');
var product = mongoose.model('Product');

module.exports = (function() {
	return {
		getProducts: function(req, res){
			product.find({}, function(err, products){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					
					res.json(products);
				}
			})
		},

		addProduct: function(req, res){
			var newproduct = new product(req.body);
			newproduct.save(function(err, product){
				if(err){
					console.log(err);
					res.render('/', {title: 'you have errors', errors: newproduct.errors})
				} else {
					res.json(newproduct);
				}
			})
		},

		

		getoneproduct: function(req, res){
			product.findOne({_id: req.params.id}, function(err, oneproduct){
				if(err){
					console.log(err);
					console.log('looks like there was an error in getonepoll Controller');
				} else {
					res.json(oneproduct);
				}
			})
		},




	}
})();