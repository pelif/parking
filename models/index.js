var mongoose = require('mongoose'); 

var db = mongoose.connect('mongodb://172.17.0.3/parking', {
    useNewUrlParser: true, 
    useUnifiedTopology: true
}); 

return db; 