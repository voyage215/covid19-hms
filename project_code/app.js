var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var exphbs = require('express-handlebars');


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var authRouter = require('./routes/auth');
var utilityRouter = require('./routes/utilities');
var adminRouter = require('./routes/admin');

var app = express();

app.engine('hbs', exphbs.create({
  extname: 'hbs',
  defaultLayout: 'layout',
  layoutsDir: __dirname + '/views/',

  // custom helper
  helpers: {
    "inc": (value) => {
      return parseInt(value) + 1;
    },
    "date_short": (value) => {
      return String(value).slice(4,10)+','+String(value).slice(10,15);
    },
    "salarycalc": (value1,value2) => {
      return value1*value2;
    },
    "taxcalc": (value1,value2) => {
      return parseFloat(value1)*parseFloat(value2)*0.2;
    },
    "grandtotal": (value1,value2,value3) => {
      return parseFloat(value1)*parseFloat(value2)*0.8+value3;
    },
    "trunb": (value1) => {
      return String(value1).slice(-4);
    }
  }
}).engine);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));




app.use('/', indexRouter);
app.use('/auth',authRouter);
app.use('/users', usersRouter);
app.use('/admin', adminRouter);


app.use('/utilities', utilityRouter);


// catch 404 error
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

module.exports = app;
