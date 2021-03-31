const categoryService = require('../services/categoryService');



async function getCategoryById(id) {
    try {

        const result = await categoryService.getCategoryById(id)
        return result;

    } catch (err) {
        console.log(err);

    }
}
async function getMenCategories(req, res) {
    try {

        const result = await categoryService.getMenCategories()
        return result;

    } catch (err) {
        console.log(err);

    }
}
async function getWomenCategories() {
    try {

        const result = await categoryService.getWomenCategories()
        return result;

    } catch (err) {
        console.log(err);

    }
}

module.exports = {
    getCategoryById: getCategoryById,
    getMenCategories: getMenCategories,
    getWomenCategories: getWomenCategories
};