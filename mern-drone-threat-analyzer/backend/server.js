const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // help connect to mongodb

require('dotenv').config(); // environment variables

const app = express(); // express server
const port = process.env.PORT || 5000; // port to server

// Middleware
app.use(cors());
app.use(express.json()); // allow us to parse json

// DB connection
const uri = process.env.ATLAS_URI; // db uri - get from mongodb dashboard
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
    );
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

// Importing API end point routes
const dronesRouter = require('./routes/drones');

app.use('/drones', dronesRouter);

// starts server - by listening to a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});