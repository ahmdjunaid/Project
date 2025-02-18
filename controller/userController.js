

const loadHome = async (req,res)=>{
    res.render('user/homepage')
}

const loadLogin = async (req,res)=>{
    res.render('user/login')
}

const loadRegister = async (req,res)=>{
    res.render('user/signup_email')
}

const loadError = async (req,res)=>{
    res.render('user/404error')
}


module.exports = {
    loadLogin,
    loadRegister,
    loadHome,
    loadError
}