const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: String,
    password:String,
    phone:Number
     
})
module.exports = mongoose.model('users', userSchema)