const categoryController = require('../controllers/categoryController');
const express = require('express');
const routes = express.Router();

//View homepage 
routes.get('/', async (req, res) => {
    const men = await categoryController.getMenCategories();
    const women = await categoryController.getWomenCategories();
    res.render('home', {men : men, women : women});
});

routes.use(function onError(err, req, res, next) {

    res.statusCode = 500;
    res.end(err + '\n');
});

module.exports = routes;
