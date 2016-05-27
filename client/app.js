(function(){
myApp.config(function($httpProvider, $routeProvider){
 $httpProvider.interceptors.push('AuthInterceptor');

 $routeProvider
   .when('/', {
     controller: 'logincontroller',
     templateUrl: '/partials/mongoose/login.html'
   })
   .when('/users/:id', {
       controller: 'userscontroller',
       templateUrl: '/partials/mongoose/user.html'
   })

	
	.when('/products',{
		controller: 'productscontroller',
		templateUrl: "partials/mongoose/product.html"
	})
	.when('/product/:id',{
		controller: 'userscontroller',
		templateUrl: "partials/mongoose/oneproduct.html"
	})
	.when('/cart',{
		controller: 'userscontroller',
		templateUrl: "partials/mongoose/cart.html"
	})

	.when('/about',{
		controller: 'userscontroller',
		templateUrl: "partials/mongoose/about.html"
	})
	.when('/addabout',{
		controller: 'userscontroller',
		templateUrl: "partials/mongoose/addabout.html"
	})
	.when('/account',{
		controller: 'userscontroller',
		templateUrl: "partials/mongoose/myaccount.html"
	})
	.when('/checkout',{
		controller: 'userscontroller',
		templateUrl: "partials/mongoose/checkout.html"
	})

	
	
	
	.otherwise({
		redirectTo: "/"
	})

});

}());




