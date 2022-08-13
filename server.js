const mongoose = require('mongoose');
const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
const app = express();

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.get('/login', async (req, res) => {
    res.render('login')
})

app.listen(3000, () => {
    console.log('listening on port 3000...');
})