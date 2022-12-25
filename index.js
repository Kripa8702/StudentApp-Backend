require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes/studentRoute')
const mongoString = process.env.DATABASE_URL;

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error' , () => {
    console.log(error)
})

database.once('connected' , () => {
    console.log('Database connected')
})

const app = express();

app.use(express.json());
app.use('/api/v1/student' , routes)

const port = process.env.PORT || 3000;

app.listen(port , () =>{
    console.log(`Server started at port ${port}`)
})