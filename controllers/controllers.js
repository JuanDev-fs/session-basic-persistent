const userData = {username:"jose",password:"12345"}
var session
const home = (req,res)=>{
    res.render('./vistas/home')
}

const login = (req,res)=>{
    session=req.session;
    console.log(session);
    if(session.userid){
        let nombre = session.userid
        return res.render('./vistas/success',{nombre:nombre});
    } 
        res.render('./vistas/login')
}

const procesarLogin = (req,res)=>{
    const {nombre,password} = req.body
    /* const user = {nombre,password} */
    if(nombre==userData.username && password ==userData.password){
        session = req.session
        session.userid = nombre
        console.log(session);
        return res.render('./vistas/success',{nombre:nombre})
    } 
        res.send('usuario incorrecto')

} 

const logout = (req,res)=>{
    req.session.destroy();
    res.redirect('/')
}

module.exports={home,login, procesarLogin,logout}