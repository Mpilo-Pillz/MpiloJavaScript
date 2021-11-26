const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))

app.get('/', (req, res) => {
    const num = Math.floor(Math.random() * 10) + 1
    // assumes .ejs becuase of app.set assumes views/home as well
    res.render("home", { rand: num })
})



app.listen(4000, () => {
    console.log("Listening on port 4000");
})