var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var Blog = require("./models/blogsch");
var Cat = require('./models/catmodel');
var methodOverride = require('method-override')

var indexRouter = require('./routes/index');
var techRouter = require('./routes/tech');
var allRouter = require('./routes/cat');
var alldata = require('./routes/all');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(methodOverride('_method'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//mongoose
mongoose.connect("mongodb://blog:blogapp1@ds039504.mlab.com:39504/blogapp",{useNewUrlParser : true});

//creating one record

// Blog.create({
//      title : 'Aerospace',
//      content : 'Hello',
//      author : 'Hema',
//      category : 'technology'
// });

// Cat.create({
//   categoryname : "science" //
// })

app.use('/', indexRouter);
// app.use('/api', techRouter);
app.use('/', allRouter);
app.use('/', alldata);

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
  // res.render('error');
});

module.exports = app;
