//THis will recieve the data from home.ejs and will process and will render it to home2.ejs
const express = require('express')
const ContactDetailsHelper = require('./db/helpers/contactDetailsHelper')  //We are making the db connection file totally separate and just requiring the mongoose
const app = express()
app.set('view engine', 'ejs')
app.set('views', './views/ejs')
app.use(express.static(__dirname + '/views'));
// This helps to process post requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/', async (req, res) => {
    try{
        const contacts = await ContactDetailsHelper.findAll()
        res.status(200).render('home', {contactsData: contacts})
    }
    catch(err){
        res.status(500).send(err)
    }
})
app.post('/insert', async(req,res)=>{
    try{
        await ContactDetailsHelper.insert(req.body)
        res.redirect('/')
    }
    catch(err)
    {
        res.status(600).send(err)
    }
    })
app.listen("3000", console.log("Running on port 3000"))
