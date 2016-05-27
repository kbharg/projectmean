var auth = require('../controllers/authcontroller');
var itemsController = require('./../controllers/itemscontroller.js')
var productsController = require('./../controllers/productscontroller.js')
var users = require('../controllers/userscontroller');
var about = require('../controllers/aboutcontroller');

module.exports = function(app){
 app.post('/register', function(req, res){
   auth.register(req, res);
 });

 app.post('/abouts', function(req, res){
   about.addabout(req, res);
 });
  app.get('/abouts', function(req, res){
   about.getabout(req, res);
 });

 app.post('/login', function(req, res){
   auth.login(req, res);
 });

 app.get('/authenticated', function(req, res){
   auth.authenticated(req, res);
 });

 app.get('/random-user', function(req, res){
   users.randomUser(req, res);
 });

 app.get('/products', function(req, res){
 	productsController.getProducts(req, res);
 });


 app.post('/products', function(req, res){
	productsController.addProduct(req, res);
 });

 app.get('/product/:id', function(req, res){
		productsController.getoneproduct(req, res);
	});

 app.post('/cart', function(req, res){
 	console.log("inside routes");
 	console.log(req.user);
		itemsController.addcart(req, res);
	});

  app.get('/carts', function(req, res){
 	itemsController.getcart(req, res);
 });

app.post('/deletecart/:id', function(req, res){
    console.log('im getting the one product in cart');
    itemsController.deletecart(req, res);
  })


	


}