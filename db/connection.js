//First we will create a connection with the mongodb using mongoose then,
//We will make a schema and will send that schema to that selected database model and set the model to recieve data along with the created schema
//after the link is established  we will include all the functions and attributes in a class and  wrap it over the model
//So as to tell what to do  and how to do.
let mongoose = require('mongoose') // module.exports = mongoose
mongoose.connect('mongodb://localhost:27017/mydb', {useNewUrlParser: true}).then((data) => {
    console.log('Connected to database')
}).catch((err) => {
    console.log("Failed to connect to database")
})
