const express = require('express');
const getProducts = require('./getProducts');

const app = express ();

const PORT = 4040;

app.get('/api/products', getProducts);

app.get('')

app.listen(PORT, () => {
    console.log(`Server is listening on: ${PORT}`);

});