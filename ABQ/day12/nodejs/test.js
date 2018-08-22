
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')


const app = express();

// app.engine('html', ejs.renderFile)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', './views2');


// app.set('views', path.join(__dirname, 'public'));

const port = 3000;
const db = "test";
const renderFile = path.join(__dirname + "/public");

mongoose.connect('mongodb://localhost:27017/test')

app.use(bodyParser.urlencoded({extend : true}))
app.use(bodyParser.json())





app.get( '/', (req, res) => {
    res.sendFile('index')
})


app.get( '/render', (req, res) => {
    res.render('/index' , {
        'message' : 'test message'
    })
})




app.get( '*', (req, res) => {
    res.send('404')
})



app.listen(port, () => {
    console.log("asdf")
})