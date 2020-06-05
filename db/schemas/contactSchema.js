
let mongoose = require('mongoose')
let contactSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    ContactNumbers:Array,
    Emails:  Array,
    Dob: Date,
})
let ContactDetailsModel = mongoose.model('ContactDetail', contactSchema)

//console.log(new ContactDetailsModel())
module.exports = ContactDetailsModel
