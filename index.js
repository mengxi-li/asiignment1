const express = require('express')
const path = require('path');
const app = express()
const port = parseInt(process.env.PORT || "3000")
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/aboutme', express.static(path.join(__dirname, 'public/aboutme.html')))
app.use('/contactme', express.static(path.join(__dirname, 'public/contactme.html')))
app.use('/project', express.static(path.join(__dirname, 'public/project.html')))
app.use('/services', express.static(path.join(__dirname, 'public/services.html')))
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})