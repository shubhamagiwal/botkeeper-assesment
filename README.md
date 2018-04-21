# botkeeper-assesment
botkeeper initial programming assessment

# Problem Statement

**Overview:** <br/>
You need to build a NodeJS service to aggregate data from two different apis and then return it to the user. There is a products api and an inventory api, they have the following api endpoints:

**Inventory Endpoints:**<br/><br/>
**/inventory** - returns the inventory for all the products we have <br/>
**/inventory/name**  - returns the inventory for a single product <br/>

**Product Endpoints:**<br/><br/>
**/products** - returns the all of the products and their prices <br/>
**/products/name** - returns a single products and its price <br/>

The **base url** is http://autumn-resonance-1298.getsandbox.com <br/>

**What you need to build:**<br/>
you need to create two api endpoints in your NodeJS service to do the following:
1. An api endpoint for the user to get all of the products along with each products inventory. It should return an array of products that include the product's name, price and inventory
2. An api endpoint for the user to get a single product and have it return the product name, price and inventory.
There is no authentication or authorization required to access the apis.

Feel free to get as creative as you want, and extra points if you use ES6. Please implement error handling, so that if I pass in a product that does not exist it returns a message to user letting them know that the product they requested does not exist.

# Installation Steps

1. Install node and npm onto your system <br/>
    Node installation: https://nodejs.org/en/download/package-manager/
    npm installation: https://blog.npmjs.org/post/85484771375/how-to-install-npm

2. Go inside the botkeeper-assesment folder and run the following command
    `npm install`

3. Run `npm install dev` to start the node server.

4. Install `postman application` or open any `web browser`.

5. Run `localhost:8000` on the `web browser` or `postman application`.

6. The output for the `localhost:8000` should be `Cannot GET /` as it is not defined. The endpoints that are created is mentioned below.

7. The new endpoints for *product_inventory* together is as follows<br />

    *Product Inventory Endpoints:* <br/><br/>
    **/products_inventory** - returns all of the products along with each products inventory <br/>
    **/products_inventory/name** - returnsfor the user to get a single product and have it return the product name, price and inventory <br/>
