const express = require('express');
// const cors = require('cors')
const connectDb = require('./config/db');
const dotenv = require('dotenv').config();
const app = express();

//**DB
connectDb();

//**MiddleWares
app.use(express.json())
// app.use(cors())
//**Routes
const authRouter = require('./routes/authRoutes');
const postRouter = require('./routes/postRoutes');

app.use('/api/post',postRouter)
app.use('/api/auth',authRouter)

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is up and running on port ${port}`)
})