const mongoose = require('mongoose')
const proSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description:String,
    status:String,
    imageUrl:String  
})
module.exports = mongoose.model('products', proSchema)