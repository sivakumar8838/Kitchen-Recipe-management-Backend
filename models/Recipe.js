const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const Recipe = mongoose.model('Recipes', recipeSchema, '');

module.exports = Recipe;
