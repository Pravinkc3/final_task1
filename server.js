const express = require('express')
const app = express();
require('dotenv').config();
let bodyParser = require('body-parser');
const bookRouter = require('./routes/bookRoutes.js');
const userRouter = require('./routes/userRoutes.js')

app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/',bookRouter)
app.use('/',userRouter)

const port = process.env.SERVER_PORT ;
app.listen(port,()=>{
    console.log(`server is running on ${port}`);
})
