const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/login.html');
});

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'admin' && password === 'password') {
    res.sendFile(__dirname + '/public/success.html');
  } else {
    res.sendFile(__dirname + '/public/error.html');
  }
});

app.listen(3000, () => {
  console.log('Server started on port 3000');
});