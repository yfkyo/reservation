const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {type: String,required : true, max:[60,'最大60文字です'] },
    price: Number,
    description: String
})

module.exports = mongoose.model('Product',ProductSchema)
