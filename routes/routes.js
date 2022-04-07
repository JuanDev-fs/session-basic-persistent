const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
router.use(bodyParser.urlencoded({extended:true}));

const menu= require('../controllers/controllers')
const inicioSesion = require('../src/middleware/cookieLogin')
// const {home,login,procesarLogin,logout}= require('../controllers/controllers')

router
    .get('/',menu.home)
    .get('/usuarios',menu.login)
    .post('/usuarios',[inicioSesion],menu.procesarLogin)
    .get('/logout',menu.logout)

module.exports=router