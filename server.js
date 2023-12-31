//This is the backend!

const express = require("express");
const path = require("path");
const app = express(); 
const port = 3000; 

app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

app.use("/API/recipes", require("./API/recipes.js"));

app.listen(port, () => console.log("Listening to a port ", port));