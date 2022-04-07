const express = require('express')
const app = express()

const sessions = require('express-session');
const unDia = 1000*60*60*24;
const unMinuto = 1000*60;

//USE
module.exports=async (req,res,next)=>{ 
    const unDia = 1000*60*60*24;
    app.use(sessions({
    secret: "123456",
	saveUninitialized:true,
	resave: false,
	cookie: { maxAge:unDia }
}))
next()
};

