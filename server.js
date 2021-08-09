const express = require('express');
const app = express();

// port set by Heroku or 8080
const port = process.env.PORT   || 8080

// use to connect to front end files once we merge the branches
//app.use(express.static(__dirname));

//routes
app.get("/", (req, res) => {
    res.render("index");
})

