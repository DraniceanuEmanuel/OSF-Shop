const axios = require('axios');

async function getCategoryProducts(productId) {
    return await axios.get(`${process.env.API_URL}/products/product_search?primary_category_id=` + productId + '&secretKey=' + process.env.SECRET_KEY)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err);
    })
}

async function getProductById(productId) {

    return await axios.get(`${process.env.API_URL}/products/product_search?id=` + productId + '&secretKey=' + process.env.SECRET_KEY)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    getCategoryProducts: getCategoryProducts,
    getProductById: getProductById
};