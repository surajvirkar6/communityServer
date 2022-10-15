const express = require('express');
const app = express();

const dotenv = require("dotenv");
dotenv.config({ path: "./src/config/config.env" });

const port = process.env.PORT || 3500;
const connetDB = require('./src/config/db');
connetDB();
app.listen(port, console.log(`Server is running on port ${port}`));

const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "50mb" }));

const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Routes
app.get('/', function(req, res) { res.send(`WELCOME TO BUNKERS COMMUNITY`)})
app.use('/api/v2/user', require('./src/routes/user'));