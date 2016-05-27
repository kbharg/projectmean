var mongoose = require('mongoose');
var about = mongoose.model('About');

module.exports = (function() {
	return {
		getabout: function(req, res){
			about.find({}, function(err, abouts){
				if(err){
					console.log(err);
					console.log('i messed up dude');
				} else {
					
					res.json(abouts);
				}
			})
		},

		addabout: function(req, res){
			var newabout = new about(req.body);
			newabout.save(function(err, about){
				if(err){
					console.log(err);
					res.render('/', {title: 'you have errors', errors: newabout.errors})
				} else {
					res.json(newabout);
				}
			})
		},

		

		


	}
})();