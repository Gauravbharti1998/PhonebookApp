//THis will recieve the data from home.ejs and will process and will render it to home2.ejs
let express = require('express')
let app = express()
app.set('view engine', 'ejs')
app.set('views', './views/ejs')
app.use(express.static(__dirname + '/views'));
// This helps to process post requests
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen("3000", console.log("Running on port 3000"))
