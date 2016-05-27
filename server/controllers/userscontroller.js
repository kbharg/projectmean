var mongoose = require('mongoose');
var customer = mongoose.model('User');
var faker = require('faker');

module.exports = (function() {
	return {
		

	randomUser: function(req, res){
     var user = faker.helpers.userCard();
     console.log("inside userscontroller");
     console.log(user);
     user.avatar = faker.image.avatar();
     res.json(user);
   },
	}
})();