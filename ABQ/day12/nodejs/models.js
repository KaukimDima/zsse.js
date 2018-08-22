const mongoose = require('mongoose')

const Schema = mongoose.Schema

const UserSchema = new Schema({
    name : String,
    pass : Number
})

module.exports = mongoose.model('User', UserSchema);