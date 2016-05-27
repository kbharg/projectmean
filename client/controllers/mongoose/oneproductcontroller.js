myApp.controller('oneproductcontroller', function($scope, $routeParams, $location, productfactory){

	$scope.products = [];

	productfactory.get1product(productId, function(data){
		$scope.products = data;
	})

	$scope.oneproduct  = function (productId){
		console.log(productId)
		$location.path('/product/' + productId);
	}

	productfactory.oneproduct($routeParams.id, function(data){
		$scope.product = data;
	})

	

	
	
	
})