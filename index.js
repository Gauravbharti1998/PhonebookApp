let express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.set('views', './views/ejs')

// This helps to process post requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/',(req,res)=>{
    res.render('home')  // to convert ejs file to html to show on page of browser
})
app.post('/show',(req,res)=>{
    console.log(req.body)
    res.render('home2', {query: req.body})
})
app.listen("3000", console.log("Running on port 3000"))
