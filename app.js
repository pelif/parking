var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var methodoverride = require('method-override');
var hbs = require('hbs'); 
var session = require('express-session'); 
var bodyParser = require('body-parser'); 
var connection = require('./models'); 

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var carsRouter = require('./routes/cars'); 

var app = express();
var server = require('http').Server(app); 

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

hbs.registerHelper('equals', (val1, val2, options) => {
  return val1 == val2 ? options.fn(this) : options.inverse(this); 
}); 

app.use(session({
  secret: 'parkingSystem'
})); 
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public'))); 
app.use(methodoverride((req, res, next) => {
  if(req.body && typeof req.body == 'object' && req.body._method) {
    var method = req.body._method; 
    delete req.body._method; 
    return method; 
  }
})); 
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/cars', carsRouter); 

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(3000, () => {
  console.log('Server is running ... '); 
}); 

module.exports = app;
