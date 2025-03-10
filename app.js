const express = require('express');



const userRouter=require('./routes/user.routes');

const dotenv =require('dotenv');
dotenv.config();
const connectToDB=require('./config/db');
const cookieParser = require('cookie-parser');

connectToDB();

// const cookieParser=require(cookieParser());


const app=express();



app.use(express.json())
app.use(express.urlencoded({extended:true})) 

app.use(cookieParser());

const indexRouter=require('./routes/index.routes');

app.set('view engine','ejs');


app.use('/',indexRouter)
app.use('/user',userRouter)


app.get('/',(req,res)=>{
    res.render('index');
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000")
})
