myApp.controller('productscontroller', function($scope, $routeParams, $location, productfactory){

	$scope.products = [];

	productfactory.getProducts(function(data){
		$scope.products = data;
	})

	$scope.addProduct = function(){
		productfactory.addProduct($scope.newproduct, function(data){
			$scope.products = data;
			console.log($scope.products)
            $scope.newproduct = {};
		})
	}

	
	
	
	
	
})