const express = require('express');
const bodyParser = require('body-parser');
const api = require('./routes/api');

const app = express();
// create a specific port for execution
const PORT = 5000; 

app.use(bodyParser.json());
app.use('/', api);

// Successful msg
app.listen(PORT, () => console.log(`App listening on port ${PORT}`));