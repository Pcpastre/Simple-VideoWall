
const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 80;
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname+'/view/indexVideo.html'));
});

app.get('/VIDEO', (req, res) =>{
  var VIDEO = req.query.vid;
  res.sendFile(path.join(__dirname+'/view/_VID/' + VIDEO));
});


app.get('/CSS', (req, res) =>{
  var c = req.query.c;
  res.sendFile(path.join(__dirname+'/view/_CSS/' + c));
});


app.get('/SCR', (req, res) =>{
  var c = req.query.scr;
  res.sendFile(path.join(__dirname+'/view/_SCR/' + c));
});

app.get('/FONT', (req, res) =>{
  var c = req.query.f;
  res.sendFile(path.join(__dirname+'/view/_FONT/' + c));
});


//add the router
app.use('/', router);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});
