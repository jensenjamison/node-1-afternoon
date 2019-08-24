const products = require('../products.json');

const getProduct = (request, response) => {
    const item = products.find(val => val.id === parseInt(request.params.id));
    if (!item) {
        return response.status(500).send("Item not in list");
    }
    response.status(200).send(item);
}

module.exports = getProduct;