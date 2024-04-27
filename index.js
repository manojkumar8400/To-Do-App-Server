const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const listRoute = require('./src/routes/listRoute')
const authRoute = require('./src/routes/authentication')
const port = 4000
app.use(express.json())
const path = require('path');

app.use(
  cors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
)

app.use(express.static(path.join(__dirname, 'public')));

mongoose
  .connect('mongodb://127.0.0.1:27017/ToDoList', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('MongoDB connected Successfully...')
  })
  .catch((err) => console.log(err))

app.use('/api', listRoute)

app.use('/auth', authRoute)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})
