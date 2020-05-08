exports.index = (req, res) => {
    res.render('index', {
        User: req.session.user
    }); 
}; 