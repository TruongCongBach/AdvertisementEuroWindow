const express      = require('express');
const path         = require('path');
const logger       = require('morgan');
const cookieParser = require('cookie-parser');
const nunjucks     = require('nunjucks');

let app = express();

const indexRouter = require('./routes/index');
// view engine setup
nunjucks.configure('views', {
    autoescape: true,
    express   : app
});


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/', indexRouter);


module.exports = app;
