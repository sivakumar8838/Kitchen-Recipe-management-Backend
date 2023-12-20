
const cors = require('cors');
const express =require('express')
const usersRouter = require('./controller/users');
const loginRouter = require('./controller/login');
const passwordRouter =require('./controller/passwordrese');
const app = express();
app.use(cors());

app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter)
app.use('/api/passwordreset', passwordRouter);
module.exports = app;