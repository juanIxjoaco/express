const express = require ('express');
const res = require('express/lib/response');
const app = express();
const path = require ('path')
const port = 3030


app.use( express.static( path.join( __dirname, './DH-Heroes/public' )) )

app.get('/', (req, res) => {
  res.sendFile (path.resolve('./DH-Heroes/views/index.html'));
});
app.get('/babbage', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/babbage.html'));
  });
  app.get('/berners-lee', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/berners-lee.html'));
  });
  app.get('/clarke', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/clarke.html'));
  });
  app.get('/hamilton', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/hamilton.html'));
  });
  app.get('/hopper', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/hopper.html'));
  });
  app.get('/lovelace', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/lovelace.html'));
  });
  app.get('/turing', (req, res) => {
    res.sendFile (path.resolve('./DH-Heroes/views/turing.html'));
  });
  

app.listen (port, () => console.log ('Funciona el servidor'))

