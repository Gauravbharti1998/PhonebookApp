//THis will recieve the data from home.ejs and will process and will render it to home2.ejs
let express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.set('views', './views/ejs')
app.use(express.static(__dirname + '/views'));
// This helps to process post requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.render('home')  // to convert ejs file to html to show on page of browser
                       //we gotta render it because  its an ejs file and not a HTML
})
// app.get('/github.com/Gauravbharti1998/PhonebookApp',(req,res)=>{
//     res.render('home')
// })
app.post('/show',(req,res)=>{
    console.log(req.body)
    res.render('home2', {val: req.body['val'],theme:req.body.theme})  
    //{key,value}
})
app.listen("3000", console.log("Running on port 3000"))
