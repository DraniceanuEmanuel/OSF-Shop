const axios = require('axios');


async function getCategoryById(id) {
    
    return await axios.get(`${process.env.API_URL}/categories/parent/` + id + '?secretKey=' + process.env.SECRET_KEY)
    .then(response => {
        return response.data;
    })
    .catch(err => {
        console.log(err);
    })
}
async function getMenCategories() {

    return await axios.get(`${process.env.API_URL}/categories/parent/mens?secretKey=` + process.env.SECRET_KEY)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
}
async function getWomenCategories() {

    return await axios.get(`${process.env.API_URL}/categories/parent/womens?secretKey=` + process.env.SECRET_KEY)
        .then(response => {
            return response.data;
        })
        .catch(err => {
            console.log(err);
        })
}
module.exports = {
    getCategoryById: getCategoryById,
    getMenCategories: getMenCategories,
    getWomenCategories: getWomenCategories
};