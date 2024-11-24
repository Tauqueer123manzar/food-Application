const mongoose=require("mongoose");
const express=require("express");
const dotenv=require("dotenv");
const dbconection=require("./database/dbconnection");

const app=express();


dotenv.config({path:"./config.env"});


const PORT=5000 || process.env.PORRT;

app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.get("/",(req,res)=>{
    res.send("Backend is working for foody application");
})

app.listen(PORT,(req,res)=>{
    console.log(`Server is running at PORT: ${PORT}`);
});

