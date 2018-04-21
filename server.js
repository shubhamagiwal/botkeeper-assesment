const express        = require('express');
const bodyParser     = require('body-parser');
const app            = express();

const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));

var apiRouterV1 = express.Router();
app.use('/',apiRouterV1);

var productInventoryApiV1 = express.Router();
apiRouterV1.use('/products_inventory',productInventoryApiV1);

var ProductInventoryController = require('./controllers/productInventory');
var pic = new ProductInventoryController(apiRouterV1);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
