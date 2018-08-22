
const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')
const ejs = require('ejs')
const UserModel = require('./models')

const app = express();

// app.engine('html', ejs.renderFile)
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.set('views', './views2');
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())



// app.set('views', path.join(__dirname, 'public'));

const port = 3000;




mongoose.connect('mongodb://localhost:27017/test');


app.get( '/', (req, res, next) => {
    res.render('index' , {
        message : 'test message',
        messages : [
            'message1',
            'message2',
            'message3',
            'message4'

        ]
    });
})

app.get('/get_id/:someid', (esp, res) => {
    res.send(esp.params.someid)
});


// app.post('/user' , (req, res) => {
//     const user1 = new UserModel();

//     user1.name = req.body.name;
//     user1.pass = req.body.pass;
//     console.log('before save');
//     user1.save = (err) => {
//     console.log('save');

//         if (err) res.send(err)
//         res.send({
//             messages : 'success, user was creaeted'
//         })
//     } 
//     console.log('after save');
     
// });

app.post('/user', (req, res) => {

    const user = new UserModel();
    user.name = req.body.name;
    user.pass = req.body.pass;

    user.save((err) => {
        if (err) res.send(err)
        res.send({
            message: 'succes, user was created'
        })
    });

});


// UserModel.find( (err, ))





app.get( '*', (req, res) => {
    res.send('404')
})





app.listen(port, () => {
    console.log("asdf")
})