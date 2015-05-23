// First add the following two lines at the top of the friends controller so that we can access our model through var Friend
// need to require mongoose to be able to run mongoose.model()
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

module.exports = (function(){
    return {
        show: function(req, res){
            Friend.find({}, function(err, results) {
                if(err) {
                  console.log(err);
                } else {
                  res.json(results);
                }
            });
        },
        add: function(req, res){
            var monfriend = new Friend({name: req.body.name, age: req.body.age});
            monfriend.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    Friend.find({}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            res.json(results);
                        }
                    });
                }
            });
        },
        destroy: function(req, res){
            Friend.remove({_id: req.body.id}, function(err, results){
                if(err){
                    console.log(err);
                } else{
                    Friend.find({}, function(err, results){
                        if(err){
                            console.log(err);
                        } else{
                            res.json(results);
                        }
                    });
                }
            });
        }
    }
})();