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
        add: function(name, age){
            var monfriend = new Friend({name: name, age: age});
            monfriend.save(function(err, results){
                if(err){
                    console.log(err);
                } else{
                    console.log(results);
                }
            });
        }
    }
})();