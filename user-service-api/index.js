const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.json([{
    "name" : "Karthikeyan",
    "email" : "karthikn@gmail.com"
  },
  {
    "name" : "muthu",
    "email" : "muthu@gmail.com"
  },
{
  "name" : "virat",
  "gmail" :"virat@yahoo.com"

},{
  "name" : "aunshka",
  "gmail" : "anus@govt.in"
}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})