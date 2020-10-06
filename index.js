const express = require('express')
const path = require('path');
const app = express()
const port = parseInt(process.env.PORT || "3000")
app.set('view engine', 'ejs');
app.use( express.static( "public" ) );
app.set('view engine', 'ejs');
app.get('/', function(req, res) {
    res.render('index');
});
app.get('/aboutme', function(req, res) {
  res.render('aboutme');
});
app.get('/contactme', function(req, res) {
  res.render('contactme');
});
app.get('/project', function(req, res) {
  res.render('project');
});
app.get('/services', function(req, res) {
  res.render('services');
});
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})