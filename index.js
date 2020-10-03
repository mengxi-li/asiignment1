const express = require('express')
const path = require('path');
const app = express()
const port = parseInt(process.env.PORT || "3000")
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/aboutme', express.static(path.join(__dirname, 'public/aboutme.html')))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})