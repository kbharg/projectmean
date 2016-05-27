myApp.factory('productfactory', function($http){
	var factory = {};
	var products = [];
	var carts = []
	var about = [];
	
	

	factory.getProducts = function(callback){
		$http.get('/products').then(function(data){
			// console.log(data.data);
			products = data.data;
			callback(data.data);
		});
	}

	

	factory.addProduct = function(info, callback){
		console.log(info);
		$http.post('/products', info).then(function(data){
			console.log(data);
			products.push(data.data)
			callback(products);
		})
	}

	factory.addabout = function(info, callback){
		console.log(info);
		$http.post('/abouts', info).then(function(data){
			console.log(data);
			about.push(data.data)
			callback(about);
		})
	}


	factory.getabouts = function(callback){
		$http.get('/abouts').then(function(data){
			console.log(data.data);
			about = data.data;
			callback(data.data);
		});
	}

	factory.oneproduct = function(productId, callback){
		console.log("to get product id")
		console.log(productId);
		$http.get('/product/' + productId).then(function(data){
			callback(data.data);
		})
	}


	factory.addcart = function(product, user,callback){
		// console.log(product, user);
		$http.post('/cart', product, user) .success(function(data){
			console.log(data);
			carts.push(data)
			callback(data);
		})
	}


	factory.getcarts = function(callback){
		$http.get('/carts').then(function(data){
			// console.log(data.data);
			carts = data.data;
			callback(data.data);
		});
	}

	factory.deletecart = function(cartId, callback){
		$http.post('/deletecart/' + cartId ).then(function(data){
			console.log(data);
			carts.splice(carts.indexOf(cart), 1);
			callback(carts);
		})
	}

	
	

	return factory;
})