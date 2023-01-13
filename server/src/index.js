const express = require('express')
const mongoose = require('mongoose')
require("dotenv").config()
const cors = require('cors')
const passport = require('passport')


const router = require("./routes/route")

const app = express()
app.use(express.json())
app.use(cors())
app.use("/",router)

//passport middleware
app.use(passport.initialize())

//passport configuration
require("./config/passport")(passport)


mongoose.set('strictQuery', false)
mongoose.connect("mongodb+srv://spacespider:admin@cluster0.0ps1ymn.mongodb.net/recovero?retryWrites=true&w=majority", { useNewUrlParser: true})
.then(() => {
    console.log('Connected to mongodb')
    app.listen(process.env.PORT||4000,()=>{
        console.log("Express running on port",process.env.PORT||4000)
    })
})
.catch((err)=>{
    console.log(err)
})