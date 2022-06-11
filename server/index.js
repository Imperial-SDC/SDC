require('dotenv').config()
const express = require('express');
const client = require('./postgres/');
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

const port = process.env.PORT
const PORT = port || 3000;

const controller = require('./controllers/index.js');

app.get('/hello', (req, res) => {
  res.send('Hello World!')
})
console.log(controller.products.testProductsByStyle, controller.products.testRelatedProducts);
app.get('/products', controller.products.getAll)
app.get('/testProductsById', controller.products.testProductsById)
app.get('/testProductsByStyle', controller.products.testProductsByStyle)
app.get('/testRelatedProducts', controller.products.testRelatedProducts)
// app.get('/products/:product_id', controller.products.getById)
// app.get('/products/:product_id/styles', controller.products.getProductStyles)
// app.get('/products/:product_id/related', controller.products.getRelatedProducts)

app.put('/reviews', controller.reviews.put);

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});

client.connect();
