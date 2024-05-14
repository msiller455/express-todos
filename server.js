// Required modules go at the top
const express = require('express');
const cors = require('cors');
const logger = require('morgan');
const todosRouter = require('./routes/todos');

// Configuration variables
const PORT = process.env.PORT || 3000;
const app = express();

// Middleware Pipelane
app.use(cors());
app.use(logger('dev'));

// Routers
app.use('/todos', todosRouter);

// Request Listener
app.listen(PORT, function () {
  console.log(`Server running on port: ${PORT}`);
});
