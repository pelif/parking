var User = require('./../models/user'); 

exports.login = (req, res) => {
    res.render('login'); 
}; 

exports.signin = (req, res) => {
    User.findOne({
        username: req.body.username, 
        password: req.body.password
    }, (err, user) => {
        if(err) {
            return; 
        }

        req.session.user = {
            username: user.username
        }; 
        res.redirect('/'); 
    }); 
}; 

exports.register = (req, res) => {
    res.render('register'); 
}; 

exports.create = (req, res) => {
    User.create(req.body, (err, user) => {
        if(err) {
            return; 
        }
        res.redirect('/users/login'); 
    });         
}; 