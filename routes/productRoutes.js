const express = require('express');
const routes = express.Router();
const productController = require('../controllers/productController');
const categoryController = require('../controllers/categoryController')

// View products in the current subcategory
routes.get('/products/:id', async (req, res) => {
    const data = await productController.getCategoryProducts(req.params.id);
    const men = await categoryController.getMenCategories();
    const women = await categoryController.getWomenCategories();
    const url = req.url.split('/')[2];
    res.render('products', { product: data ?? [], currentUrl: url, men: men, women: women });
});
// View product detailed page (PDP)
routes.get('/product/:id', async (req, res) => {
    const data = await productController.getProductById(req.params.id);
    const men = await categoryController.getMenCategories();
    const women = await categoryController.getWomenCategories();
    const url = req.url.split('/')[2];
    res.render('view-product', { product: data ?? [], currentUrl: url, men: men, women: women });
});
routes.get('/search', async (req, res) => {
    const men = await categoryController.getMenCategories();
    const women = await categoryController.getWomenCategories();
    res.render("search-results", {men: men, women: women} )
});

module.exports = routes;