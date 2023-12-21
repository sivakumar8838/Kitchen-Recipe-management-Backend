const express = require('express');
const Recipe = require('../models/Recipe'); 
const recipesRouter = express.Router();


recipesRouter.get('/', async (req, res) => {
  const { id, name } = req.body; 
   
 try {

  
 } catch (error) {
  console.error(error)
 }
});

module.exports = recipesRouter;
