const express = require('express');
const router = require('./routes/testRoute');
const dotenv = require('dotenv');

const colors = require('colors');
const morgan = require('morgan');
const cors = require('cors');
const connectDB = require('./config/db');



//dotenv config
dotenv.config()

//rest object
const app = express();

// middlewares 
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// routes
app.use('/api/v1/',router)
//PORT
PORT = process.env.PORT || 5000;

//mongodb connection
connectDB();
//listen

app.listen(PORT, (req, res) => {
    console.log(`Server Running In ${process.env.DEV_MODE} Mode on 
    ${process.env.PORT}`.bgBlue.white);
})

