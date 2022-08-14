const express = require('express');
const ejsMate = require('ejs-mate');
const path = require('path');
const methodOverride = require('method-override');
const dotenv = require('dotenv');
const connectdb = require('./server/database/localConnection');
const morgan = require('morgan');
const app = express();

dotenv.config({ path: 'config.env' });
const port = process.env.PORT || 3000;

app.engine('ejs', ejsMate);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(morgan('tiny')); //logs
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

connectdb();

app.use('/css', express.static(path.resolve(__dirname, 'assets/css')));
app.use('/img', express.static(path.resolve(__dirname, 'assets/img')));
app.use('/js', express.static(path.resolve(__dirname, 'assets/js')));

/**
 * @description: load routes
 */
app.use('/', require('./server/routes/routes'));

app.listen(port, () => {
    console.log(`site: http://localhost:${port}`);
})