myApp.controller('userscontroller', function($scope, $location, userfactory, $routeParams, randomuserfactory, productfactory){
   $scope.getRandomUser = getRandomUser;
   $scope.logout = logout;
   $scope.products = [];
   $scope.product = [];
   $scope.cart = [];
   $scope.about = [];
   $scope.abouts = [];
   $scope.total = [];
   $scope.count = 0;
   $scope.total_price = 0;

   userfactory.getUser().then(function success(response){
     console.log('Got user in the UserController');
     console.log(response);
     $scope.user = response.data;
   });

   function logout(){
     userfactory.logout()
     $scope.user = null;
     $location.path('/');
   }


   function getRandomUser(){
     randomuserfactory.getUser().then(function success(response){
       $scope.randomUser = response.data;
     });
   }
   productfactory.getProducts(function(data){
    $scope.products = data;
  })

   $scope.oneproduct  = function (productId){
    console.log(productId)
    $location.path('/product/' + productId);
  }

  productfactory.oneproduct($routeParams.id, function(data){
    $scope.product = data;
  })

  $scope.addcart = function(product,user){
   console.log(product,user);
    productfactory.addcart(product, user, function(data){
      $scope.cart = data;
      console.log($scope.cart)
            
    })
  }


  $scope.addabout = function(about){

    productfactory.addabout(about, function(data){
      $scope.about = data;
      console.log($scope.about);
            
    })
  }

  productfactory.getabouts(function(data){
    $scope.abouts = data;
  })

  productfactory.getcarts(function(data){
    console.log(data);
    console.log("logged in user id");
    console.log($scope.user._id);

    for(x in data){
      console.log("one user")
      console.log(data[x].user._id);
       

      if (data[x].user._id ==  $scope.user._id) {
        console.log(data[x]);
        $scope.count = $scope.count+1; 
          $scope.total.push($scope.count);

           $scope.cart.push(data[x]);
           $scope.total_price += data[x].product[0].price;
          console.log($scope.total_price);
      }
    }
    console.log($scope.total);
   

   })

  $scope.deletecart = function(cartId){
    productfactory.deletecart(cartId, function(data){
      console.log(data);
      $scope.cart = data;
    })
  }




 })