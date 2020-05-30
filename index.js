let express = require('express')
let app = express()

app.set('view engine', 'ejs')
app.set('views', './views/ejs')

app.get('/', (req, res) => {
    res.render('prac', { arr: ['Rishabh', 'Gaurav', 'Hello', 'World'] })
})

app.listen("3000", console.log("Running on port 3000"))
