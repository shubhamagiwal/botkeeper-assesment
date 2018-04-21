'use strict'

var ProductInventoryService = require('../services/productInventory');

class ProductInventoryController {
    constructor(router){
        this.router = router;
        this.registerRoutes();
    }

    registerRoutes(){
        this.router.get('/products_inventory',this.getProductInventory.bind(this));
        this.router.get('/products_inventory/:name',this.getSingleProductInventory.bind(this));
    }

    getProductInventory(req,res){

        ProductInventoryService.getProductInventory((err,data) => {
            if(err){
                res.send(404);
            }else{
                res.send(data);
            }
        });

    }

    getSingleProductInventory(req,res){

        ProductInventoryService.getSingleProductInventory(req.params.name , (err,data) => {
            if(err){
                res.send(404);
            }else if(data.product_inventory.length > 0){
                res.send(data);
            }else if(data.product_inventory.length <= 0){
                res.status(404).send({error:"The given product is not found"})
            }
        });
    }
}

module.exports = ProductInventoryController;
