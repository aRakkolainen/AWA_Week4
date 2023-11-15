const express = require("express");
const router = express.Router(); 



router.get("/recipe/:food", (req, res) => {
    let recipe = req.body; 
    let recipeName = req.params.food; 
    console.log(recipe);
    res.send(recipe);
})







module.exports = router;