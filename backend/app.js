// app.js
const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json())
app.use(cors());
app.use('/', routes);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});