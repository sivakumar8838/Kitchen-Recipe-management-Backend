// const express = require('express');
// const Recipe = require('../models/Recipe'); 
// const recipesRouter = express.Router();


// recipesRouter.get('/', async (req, res) => {
//   const { id, name } = req.query; 
 
//   try {
//     let query = {};
//     if (id) {
//       query = { _id: id }; 
//     } else if (name) {
//       query = { name: { $regex: new RegExp(name, 'i') } };
//     }

//     const recipes = await Recipe.find(query);
//     console.log(recipes)
//     res.json({ recipes });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// module.exports = recipesRouter;
