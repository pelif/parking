var Car = require('./../models/car'); 

exports.find = (req, res) => {
    Car.find({}, (err, cars) => {
        if(err) {
            return; 
        }
        res.render('cars_list', {
            cars: cars
        }); 
    }); 
    
}; 

exports.new = (req, res) => {
    res.render('cars_new'); 
}; 

exports.create = (req, res) => {
    Car.create(req.body, (err, car) => {
        if(err) {
            return; 
        }
        res.redirect('/cars'); 
    }); 
}; 

exports.edit = (req, res) => {
    Car.findById(req.params.id, (err, car) => {
        if(err) {
            return; 
        }
        res.render('cars_edit', {car: car}); 
    }); 
    
}; 

exports.update = (req, res) => {
    Car.update({
        _id: req.params.id
    }, req.body, (err, car) => {
        if(err) {
            return err; 
        }
        res.redirect('/cars'); 
    }); 
}; 

exports.remove = (req, res) => {
    Car.remove({
        _id: req.params.id
    }, (err) => {
        if(err) {
            return; 
        }
        res.redirect('/cars'); 
    }); 
}; 

