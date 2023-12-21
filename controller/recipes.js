const express = require('express');
const Recipe = require('../models/Recipe'); 
const recipesRouter = express.Router();


recipesRouter.get('/', async (req, res) => {
 
   
 try {
  const recipes = await Recipe.find()
  
  return res.json(recipes);
  
 } catch (error) {
  console.error(error)
  return res.json({message: error.message});
 }
});

module.exports = recipesRouter;
