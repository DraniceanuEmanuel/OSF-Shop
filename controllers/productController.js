const productService = require('../services/productService');

async function getCategoryProducts(id) {
    try {

        const result = await productService.getCategoryProducts(id)
        return result;

    } catch (err) {
        console.log(err);

    }
}

async function getProductById(id) {
    try {

        const result = await productService.getProductById(id)
        return result;

    } catch (err) {
        console.log(err);

    }
}

module.exports = {
    getCategoryProducts: getCategoryProducts,
    getProductById: getProductById
};