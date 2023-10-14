const express = require('express')
require('./db/conn')
const app = express()
const cors = require('cors')
require("dotenv").config();
const port = 5000;

app.use(cors())
app.use(express.json())
app.use('/user', require('./routes/routes'));

app.listen(port, () => {
  console.log(`Listening on port http://localhost:${port}`)
})