const express = require('express');
const UserRecipe = require('../models/UserRecipe');
const UserRecipeRouter = express.Router();

const UserRecipecontroller = {
    createRecipe: async (req, res) => {
        try {
            const { name, category, description, ingredients, instructions } = req.body;

            const newRecipe = new UserRecipe({
                name,
                category,
                description,
                ingredients,
                instructions,
            });

            const savedRecipe = await newRecipe.save();

            return res.status(201).json(savedRecipe);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
    },

    editRecipe: async (req, res) => {
        try {
            const { id } = req.params;
            const { name, category, description, ingredients, instructions } = req.body;

            const updatedRecipe = await UserRecipe.findByIdAndUpdate(
                id,
                { name, category, description, ingredients, instructions },
                { new: true }
            );

            if (!updatedRecipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }

            return res.json(updatedRecipe);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
    },

    deleteRecipe: async (req, res) => {
        try {
            const { id } = req.params;

            const deletedRecipe = await UserRecipe.findByIdAndDelete(id);

            if (!deletedRecipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }

            return res.json({message:'Delete Done'});
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
    },

    getRecipe: async (req, res) => {
        try {
            const recipe = await UserRecipe.find();

            if (!recipe) {
                return res.status(404).json({ message: 'Recipe not found' });
            }

            return res.json(recipe);
        } catch (error) {
            console.error(error);
            return res.status(500).json({ message: 'Server error', error: error.message });
        }
    },
};

UserRecipeRouter.post('/', UserRecipecontroller.createRecipe);
UserRecipeRouter.put('/:id', UserRecipecontroller.editRecipe);
UserRecipeRouter.delete('/:id', UserRecipecontroller.deleteRecipe);
UserRecipeRouter.get('/', UserRecipecontroller.getRecipe);

module.exports = UserRecipeRouter;