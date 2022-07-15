const express = require("express")
const app = express()
const bodyParser = require('body-parser')
const nodemailer = require('nodemailer')
const path = require('path')

// mongoose
const mongoose = require("mongoose")


// setup in env variable
mongoose.connect("mongodb+srv://pramod:pramod115@Cluster0.mongodb.net/Endavour", () => {
    console.log("connected")
})

const pug = require('pug');
app.set('view engine', 'pug')

// nodemailer
    
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'photosharing2078@gmail.com',
      pass: 'SBg89YPfir'
    }
});
  

// nodemailer

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    const mailOptions = {
        from: req.body.email,
        to: 'pramodthapa115@gmail.com',
        subject: 'Sending Email using Node.js',
        text: 'That was easy!'
    }
    res.render('homepage')
})
app.get('/enterotp/:email', (req, res) => {
    console.log(req.params)
    res.render('otp', { email: `${req.params.email}`})
})

app.post('/users/signup', (req, res) => {
    console.log(req.body)

    res.json({
        msg:"ok",
        email: req.body.email
    })
})

app.use(express.static('public'))

app.listen(3000, () => {
    console.log("listening at 3000")
})