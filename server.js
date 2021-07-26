const express = require("express");

const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes/index.js")
const path = require('path')

const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);

const store = new MongoDBStore({
    url: 'mongodb://localhost/secretIsleGame',
    // databaseName:'secretIsleGame',
    collection: 'mySessions'
  });

  store.on('error', function(error) {
      console.log(error);
    });
    

    app.use(session({
      secret: 'This is a secret',
      cookie: {},
      store: store,
      resave: false,
      saveUninitialized: true
    }));

    app.get('/', function(req, res) {
      res.send('Hello ' + JSON.stringify(req.session));
    });
// const routes = require('./routes')

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public'))); 

// Add routes, both API and view
app.use(routes);

//Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/secretIsleGame",
  { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  } 
);

// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);

  // throw new Error ('BROKEN')
})
