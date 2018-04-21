'use strict';

const axios = require("axios");
const mergeByKey = require("array-merge-by-key");
const BASE_URL = "http://autumn-resonance-1298.getsandbox.com";

const makeRequest = async (name) => {

    const productPromise = (name == "all" ? axios.get(`${BASE_URL}/products`) : axios.get(`${BASE_URL}/products/${name}`));
    const inventoryPromise = (name == "all" ? axios.get(`${BASE_URL}/inventory`) : axios.get(`${BASE_URL}/inventory/${name}`));
    const [products,inventory] = await Promise.all([productPromise,inventoryPromise]);
    const result = (name == "all" ? mergeByKey("name", products.data, inventory.data.inventory): mergeByKey("name", products.data.product, inventory.data.inventory));
    return {product_inventory:result};
}

class ProductInventoryService {

    getProductInventory(callback){
        makeRequest("all").then(data => {
            callback(null,data);
        });
    }

    getSingleProductInventory(name,callback){
        makeRequest(name).then(data => {
            callback(null,data);
        });
    }
}

module.exports = new ProductInventoryService();
