const express = require('express');
const getProducts = require('./getProducts');
const getProduct = require('./getProduct');
const chalk = require('chalk');

const app = express ();

const PORT = 4040;

app.get('/api/products', getProducts);

app.get('/api/product/:id', getProduct);


app.listen(PORT, () => {
    console.log(chalk.magenta(`Server is listening on: ${PORT}`));

});