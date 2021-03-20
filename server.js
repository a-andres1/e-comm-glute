const express = require('express');
const routes = require('./routes');
const connection = require('./config/connection')
// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server
app.listen(PORT, () => {
  // clears out data and resets the table
  // creates tables based on models
  connection.sync({
    force: false
  });
  console.log(`App listening on port ${PORT}!`);
});
