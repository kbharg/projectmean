myApp.controller('logincontroller', function($scope, $location, userfactory){
   $scope.login = login;
   $scope.register = register;

   // we can use the uuser factory to get the user who is currently
   // logged in


  $scope.createAccount = function(){
     console.log('creating account');
     $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
   }

   userfactory.getUser().then(function success(response){
     console.log('Got user in the logincontroller');
     console.log(response);
     $scope.user = response.data;
     $location.path('/users/'+$scope.user._id);
   });

   function login(username, password){
     userfactory.login(username, password).then(function success(response){
       console.log(response.data)
       $scope.user = response.data.user;
       $location.path('/users/'+$scope.user._id);
       // alert(response.data.token);
     }, handleError);
   }

   function register(username, password){
     userfactory.register(username, password).then(function success(response){
       console.log('in the user fatctoyr');
       console.log(response.data.user);
       $scope.user = response.data.user;
       $location.path('/users/'+$scope.user._id);
       //alert(response.data.token);
     }, handleError);
   }

   function handleError(response){
     // alert('Error: ' + response.data);
   }
 }
)