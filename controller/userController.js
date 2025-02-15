

const loadLogin = async (req,res)=>{
    res.render('user/login')
}

const loadRegister = async (req,res)=>{
    res.render('user/signup_email')
}


module.exports = {
    loadLogin,
    loadRegister
}