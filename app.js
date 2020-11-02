const express = require('express')
const app = express()
const path = require('path')
const port = 3000

app.use(express.static(path.join(__dirname,'public')))


app.post('/', function (req, res) {
    console.log(req)
    //we'll get the search query here

    //we'll call an object that fetches the data from reddit

    //then it will that object will make a call to the stats engine which
    //will then return a result 

    //we'll send back an html page or a PUG with the analysis from the stats engine
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})