const express = require('express');
const mongoose = require('mongoose');//Importing Express
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();
const config = require('./config.json');
const password = config.password;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended: false }));

//routes
app.use("/api/products", productRoute);


app.get('/', (req, res) =>{
  res.send(`Hello from Node API Server`);
});




/** 
 * req -> request method
 * res -> response method
 * pBA46oJIoAjN8wCk
*/



mongoose.connect(`mongodb+srv://appAdmin:${password}@crudappbackend.jjn9boo.mongodb.net/Node-API?retryWrites=true&w=majority&appName=CrudAppBackend`)
.then(()=>{
  console.log(`Connected to DB`);
  app.listen(3000, () =>{
    console.log(`Server is running on port 3000`);
  });
})
.catch(()=>{
  console.log(`connection failed`);
})

/**
 * set port to 3000 and you can access the node website and access the api
 */