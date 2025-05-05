const { render } = require('ejs');
const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.urlencoded({ extended: true }));
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.json())
const Mydata = require("./models/schema");

app.get('/', (req,res) => {
    res.render('index');
})
app.get('/products', (req, res) => {
    res.render('products');
})
app.get('/calculator', (req, res) => {
    res.render('calculator');
})
app.get('/data_and_order', (req, res) => {
    res.render('data_and_order');
})
app.get('/ends', (req, res) => {
    res.render('ends');
})
app.get('/orders', (req, res) => {
    res.render('orders');
})
app.get('/other_earning', (req, res) => {
    res.render('other_earning');
})
app.get('/other_price_calculator', (req, res) => {
    res.render('other_price_calculator');
})
app.get('/other', (req, res) => {
    res.render('other');
})
app.get('/printpage', (req, res) => {
    res.render('printpage');
})

app.post('/test',(req ,res) => {
    req.body = {
        photo: 'defualte',
        name: 'mm',
        price: 'hh',
        description: 'jj',
        date:{
            year: 'jj',
            month: 'g',
            day: 'uhh'
        }
    }
    res.send('ok')
    res.redirect('/')
})

app.listen(500,() => {
    console.log('http://'+'localhost:500/')
})


mongoose.connect('mongodb+srv://game05343:edddeeeedeeeeeddeededeee@balqeessystemcuster.wuq1eii.mongodb.net/?retryWrites=true&w=majority&appName=BalqeesSystemCuster')
  .then(() => console.log('✅ Connected to MongoDB Atlas'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));
