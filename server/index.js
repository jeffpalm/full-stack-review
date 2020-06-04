require('dotenv').config()
const express = require('express'),
  session = require('express-session'),
  massive = require('massive'),
  auth = require('./controllers/authCtrl'),
  app = express(),
  { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env

app.use(express.json())
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false, // Will only resave if user changes something
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 7 }
  })
)

// Auth endpoints
app.post('/auth/login', auth.login)
app.post('/auth/register', auth.register)
app.delete('/auth/logout', auth.logout)
app.get('/auth/user', auth.getUser)

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false }
})
  .then(db => {
    app.set('db', db)
    console.log('Database in place 🚀')
    app.listen(SERVER_PORT, () => console.log(`Servin and observin on port ${SERVER_PORT}`))
  })
  .catch(err => console.log(`Error: ${err}`))
