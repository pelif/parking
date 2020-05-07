exports.find = (req, res) => {
    res.render('cars_list'); 
}; 

exports.new = (req, res) => {
    res.render('cars_new'); 
}; 

exports.edit = (req, res) => {
    res.render('cars_edit'); 
}; 