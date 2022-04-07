const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}));



const {home,login,procesarLogin,logout}= require('../controllers/controllers')

router
    .get('/',home)
    .get('/usuarios',login)
    .post('/usuarios',procesarLogin)
    .get('/logout',logout)

module.exports=router