const express = require('express')
const app = express()
const PORT = 3000
const router = require('../routes/routes')

const sessions = require('express-session');
const unDia = 1000*60*60*24;
const unMinuto = 1000*60;

//SET
app.set('view engine','ejs')


//USE
app.use(sessions({
    secret: "123456",
	saveUninitialized:true,
	resave: false,
	cookie: { maxAge:unDia }
}));

app.use('/',router)


app.listen(PORT,()=>{
    console.log("SERVER UP ON PORT",PORT);
})