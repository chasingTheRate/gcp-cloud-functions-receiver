const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 3001;

app.use( bodyParser.json() );
app.get('/', (req, res) => res.send('Hello World!'))
app.post('/helloworld', (req, res) => {
  console.log(req.body.data);
  res.status(200).send(req.body.data)
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))