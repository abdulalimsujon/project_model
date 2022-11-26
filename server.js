const express = require('express');

const app = express();

const helmet = require('helmet'); // set security for http related response headers

const moongoose = require('mogoose')

require('dotenv').config();

const morgan = require('morgan') // it is very helpful while debugging and want to help log file

const cors = require('cors')

const { raddirSync } = require('fs') // the fs raddirSync is used to synchronously read the content to the given directory..


//middleware

app.use(helmet());
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(morgan('dev'))
app.use(cors())


    //db connection ==>moongoose


    .connect(process.env.DATABASE)
    .then(console.log('db connected'))
    .catch((err) => console.log('db error =>', err))

const port = process.env.PORT || 5000;


app.listen(port, () => {
    console.log('database connected')
})