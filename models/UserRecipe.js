const mongoose = require('mongoose');

const userrecipeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
    category: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
      },
      ingredients: {
        type: [String],
        required: true,
      },instructions: {
        type: [String],
        required: true,
      }
});

const UserRecipe = mongoose.model('UserRecipe', userrecipeSchema);

module.exports = UserRecipe;