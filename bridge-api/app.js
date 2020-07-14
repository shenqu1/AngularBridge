const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const bridgesRouter = require('./routes/bridges');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//http://localhost:3000/api/*
app.use('/api', bridgesRouter);

module.exports = app;
