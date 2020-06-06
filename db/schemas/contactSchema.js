
let mongoose = require('mongoose')
let contactSchema = new mongoose.Schema({
    Name: {type: String, required: true},
    ContactNumbers:Array,
    Emails:  Array,
    Dob: Date,
})
let ContactDetailsModel = mongoose.model('ContactDetail', contactSchema)
//the name is ContactDetail but the mongo will convert it to contactdetails as collection name.
//console.log(new ContactDetailsModel())
module.exports = ContactDetailsModel
