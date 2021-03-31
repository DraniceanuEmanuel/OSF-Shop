const express = require('express');
const routes = express.Router();
const categoryController = require('../controllers/categoryController');

//view main Categories
routes.get('/category/:id', async (req, res, next) => {
    const data = await categoryController.getCategoryById(req.params.id);
    const men = await categoryController.getMenCategories();
    const women = await categoryController.getWomenCategories();
    const url = req.url.split('/')[2];
    res.render('main-categories', { categories: data, currentUrl: url, men: men, women: women });
});

module.exports = routes;