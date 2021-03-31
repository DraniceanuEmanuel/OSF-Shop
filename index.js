const express = require('express');
const path = require('path');
const app = require('express')();
require('dotenv').config();
const cookieParser = require("cookie-parser");
const indexRoutes = require('./routes/index');
const categoryRoutes = require('./routes/categoryRoutes');
const productRoutes = require('./routes/productRoutes');
const authRoutes = require('./routes/authRoutes');
const cartRoutes = require('./routes/cartRoutes');


app.use(express.json());
app.use(express.urlencoded());

//Cookie
app.use(cookieParser());

//Routes
app.use('/', indexRoutes);
app.use('/', categoryRoutes);
app.use('/', productRoutes);
app.use('/', authRoutes);
app.use('/', cartRoutes);

//Templates
app.set('view engine', 'ejs');



//Static files
app.use('/assets', express.static(__dirname + '/assets'));
app.use(express.static(path.join(__dirname, 'public')));


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});

module.exports = app;