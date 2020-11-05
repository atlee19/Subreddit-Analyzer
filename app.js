const express = require('express')
const app = express()
const path = require('path')
const { env } = require('process')
const search = require('./lib/search')
const port = 3000

//Body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended : true }))

//Auto sends index.html
app.use(express.static(path.join(__dirname,'public')))


app.post('/', function (req, res) {
  //we'll get the search query here
  const query = req.body.search_field
  console.log(query)
    
  //we'll call an object that fetches the data from reddit
  search.subreddit(query)

  //then within in that object will make a call to the stats engine which
  //will then return a result 

  //we'll send back an html page or a PUG with the analysis from the stats engine
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})