const express = require('express')
const bodyParser = require('body-parser')

const ejs = require('ejs')

const path = require('path')

const mongoose = require('mongoose')

const  UserModel = require('./models');

const cors = require('cors')

const app = express();

const port = 3000;


app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.set('view engine', 'ejs');
app.set(express.static('public'));
app.set('views', './views2');
mongoose.connect('mongodb://localhost:27017/test');

// app.use(bodyParser.json())

app.get('/', function(req, res) {

    res.render('index', {

        message:"message",

        messages: [

            'message1',
            'message2',
            'message3'
        ]
    }
);

});

app.get('/get_id/:someid', (req,res,next) => {

    next();
}, (req,res) => {


    res.send(req.params.someid)
});

app.post('/user', (req,res) => {

const user = new UserModel();

console.log(req.body)

user.name = req.body.name;

user.pass = req.body.pass;

user.save((err) => {

    if(err) res.send('error')

    res.send({
        message: "Success "
    })
});



});

app.get('/user', (req,res) => {



UserModel.find((err, users) => {


    res.send(users);
});

})

app.get('/user/:user_name', (req,res) => {



    UserModel.findOne({ 
        name: req.params.user_name},

        {

            name: true,

            pass:true
        },


        (err, user) => {

            res.send(user);
        }
    
    
 );
    
    })


    app.put('/user/:user_name', (req,res) => {



        UserModel.findOneAndUpdate({ 
            name: req.params.user_name
        },
        { $set: {

            name: req.body.name
        }},
        {

            new: true
        },
    
            (err,user) => {


                res.send(user);
            }
        
        
     );
        
        })

    app.delete('/user/:user_name', (req,res) => {



        UserModel.remove({ 
            name: req.params.user_name},
            (err) => {
    
                res.send({

                    message: "delete"

                })
            }
        
        
     );
        
        })







app.get('*', (req, res) => {

    res.send("Error 404")
})



app.listen(port,() => {

    console.log('asd')
});

app.use(cors());
