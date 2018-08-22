const express = require('express');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require("path");
const cors = require('cors');

const UserModel = require('./models')

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.set('view engine', 'ejs');
app.set('views', './views2');

mongoose.connect('mongodb://localhost:27017/test');



app.get('/', function (req, res, next) {
    res.render('index', {
        message : "message",
        messages : [
            'message1',
            'message2',
            'message3',
            'message4',
        ]
    });
});

app.get('/get_id/:someid', (req, res, next) => {
    console.log('next');
    next();
    }, (req, res) => {
        res.send(req.params.someid);

    } 
);

app.get('/user', (req, res) =>  {

    UserModel.find((err, users) => {
        res.send(users);
    });

});

// .findOne([query], [fieldsToReturn], [callback])

app.get('/user/:user_name', (req, res) =>  {

    UserModel.find({
        name: req.params.user_name
    },
    (err, user) => {
        if (err) res.send(err)
        res.send(user);
    }
    );

});

app.delete('/user/:user_name', (req, res) =>  {

    UserModel.remove({
        name: req.params.user_name
    },
    (err) => {
        res.send({
            message : 'deleted'
        });
    }
    );

});


app.put('/user/:user_name', (req, res) =>  {

    UserModel.findOneAndUpdate({
            name: req.params.user_name
        },
        {$set : {
            name : req.body.name
        }},
        {new : true},
        (err, user) => {
            res.send(user);
        }
    );

});




app.post('/user', (req, res) =>  {

    const user = new UserModel();
    user.name = req.body.name;
    user.pass = req.body.pass;
 
    user.save((err) => {
        if (err) res.send(err)
        res.send({
            message : 'succes, user was created'
        })
    });

});



app.use(cors());
app.listen(3000);