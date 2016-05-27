var mongoose = require('mongoose');
var item = mongoose.model('Item');

module.exports = (function() {
	return {
		addcart: function(req, res){
		
			var newCart = new item({product:req.body, user:req.user});
			// newCart.product = req.body;
			newCart.user = req.user;
			newCart.save(function(err, data){
				data.product.push(req.body);

				if(err){
					console.log("error");
					console.log(err)
				}
				else{
					console.log("inside add cart ");
					console.log(data);
					res.json(data)
				}
			})
		}, 

		getcart: function(req, res){
			console.log("in get cart");
			console.log(req.params)
			item.find({}, function(err, carts){
				console.log(req);
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					
					res.json(carts);
				}
			})
		},
		deletecart: function(req, res){
			item.remove({_id: req.params.id}, function(err, cart){
				if(err){
					console.log(err);
					console.log('looks like we have an error in items Controller');
				} else {
					res.json(cart);
				}
			})
		}, 
	}
})();


 