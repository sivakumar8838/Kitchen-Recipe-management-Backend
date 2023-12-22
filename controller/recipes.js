const express = require('express');
const Recipe = require('../models/Recipe'); 
const recipesRouter = express.Router();

const recipecontroller = {
    recipe: async (req, res) => {
        try {
         const recipes = await Recipe.find()
         
         return res.json(recipes);
         
        } catch (error) {
         console.error(error)
         return res.json({message: error.message});
        }
    },
    getrecipe: async (req, res) => {
        try {
            const { id } = req.params; 
            const user = await Recipe.findById(id)
            if (user) {
                return res.json(user)
            }
            return res.json({message:'some error in particular Id'})
        } catch (error) {
            console.error(error)
            return res.json({message: error.message});
        }
    }, getcategory: async (req, res) => {
        try {
            const { getcategory } = req.params;
            const user = await Recipe.find({category:getcategory})
            if (user) {
                 return res.json(user)
            }
            return res.json({message:"no found"})
        } catch (error) {
            console.error(error)
            return res.json({message: error.message});
        }
    }
}


recipesRouter.get('/', recipecontroller.recipe);
recipesRouter.get('/:id', recipecontroller.getrecipe)
recipesRouter.get('/category/:getcategory',recipecontroller.getcategory)
module.exports = recipesRouter;