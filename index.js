const express = require("express");
const path = require("path");

var port = process.env.PORT || 3000;
// init express
var app = (module.exports = express());


app.use((req, res, next) => {
    const OY_ENV = process.env.NODE_ENV || "development";

    res.send(`I'm runing @ ${req.hostname}`)
});

app.use((req, res, next) => {
    console.log(req.originalUrl);
    next()
});


app.use((err, req, res, next) => {
    console.log(err);
    // res.status(500).render('error');
    res.send(500);
});



app.listen(port, async () => {
    console.log(`I'm running @ ${port} env:${process.env.NODE_ENV}`)
});
