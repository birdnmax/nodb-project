const express = require('express');
const cors = require('cors');
const bodyparse = require('body-parser');

require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

const port = process.env.port || 8080;
app.listen(port, ()=>{
    console.log('running on port ${port}')
})