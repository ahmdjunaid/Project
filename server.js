const express =  require('express')
const app = express()
const env = require('dotenv').config()
const ejs = require('ejs')
const path = require('path')
const connectDB = require('./config/db')
const userRoute = require('./routes/user')

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))
app.use(express.static('public'))

app.use(express.urlencoded({extended:true}))



app.use('/user',userRoute)


connectDB()

app.listen(process.env.PORT, ()=>{
    console.log('Server started at localhost 7000')
})

module.exports = app;