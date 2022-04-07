const userData = {username:"jose",password:"12345"}
var session

const menu = {

home : (req,res)=>{
    res.render('./vistas/home')
},

login : (req,res)=>{
    session=req.session;
    console.log(session);
    if(session.userid){
        let nombre = session.userid
        return res.render('./vistas/success',{nombre:nombre});
    } 
        res.render('./vistas/login')
},

procesarLogin : (req,res)=>{
    const {nombre,password} = req.body
    /* const user = {nombre,password} */
    if(nombre==userData.username && password ==userData.password){
        session = req.session
        session.userid = nombre
        console.log(session);
        return res.render('./vistas/success',{nombre:nombre})
    } 
        res.send('usuario incorrecto')

} ,

logout : (req,res)=>{
    req.session.destroy();
    res.redirect('/')
}


}


// module.exports={home,login, procesarLogin,logout}
module.exports=menu