const express = require('express');
const app = express();
const PORT = 3000;
const dotenv = require('dotenv')
dotenv.config();
const { sequelize, connectDB } = require("./db/db");
connectDB();
const userRouter = require('./route/route')

app.use(express.json());
app.use('/api',userRouter)







app.listen(PORT,()=>{
    console.log('Server is runnning at 3000')
})          