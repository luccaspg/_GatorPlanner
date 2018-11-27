var mongoose = require('mongoose'),
    Account = mongoose.model('Account');

module.exports.profileRead = function(req, res) {

    if(!req.payload._id) {
        res.status(401).json({
            "message" : "UnauthorizedError: private account"
        });
    }
    else {
        Account.findById(req.payload._id).exec(function(err,account){
            res.status(200).json(account);
        });
    }
};