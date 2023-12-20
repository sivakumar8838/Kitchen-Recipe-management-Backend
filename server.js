const { default: mongoose } = require("mongoose");
const { MONGODB_URI, PORT} = require("./utils/config");
const express = require('express');

const app = require('./app');

mongoose.set('strictQuery', false)

console.log('connecting to MongoDB...', MONGODB_URI )

mongoose.connect(MONGODB_URI)
  .then(() => {console.log('connected to MongoDB...')

  app.listen(PORT, ()=> {
    console.log(`server running to port http://localhost:${PORT}`);
  })
})
.catch((error)=> {
    console.log('error connecting to MongoDB', error.message)
});
