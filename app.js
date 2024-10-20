const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');

app.set('view engine', 'ejs');
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/", (req, res) => {
    res.send('Welcome');
})

app.listen(3000);