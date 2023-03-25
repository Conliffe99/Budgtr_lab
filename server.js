const express = require(`express`);
const budget = require('.models/budget');
const app = express();
const { budgets } = require('./models/budget');

//the middleware
app.set('view engine', 'ejs');
app.use (express.json());

app.use(espress.urlencoded({extended:false}))
// app.use[express.statistic]

//the routes


//the index routes
app.get('/budgets', (req, res) => {
    res.render('index', {budgets});
})



app.get('/budgets/:index', (req,res) =>{
    let budget = budget[req.params.index]
    res.render('show', {budget: budget})
})

//the new route
app/get('budgets/new', (req,res) => {
})

//creating the route
app.post('budgets', (req, res) => {
})

//the fallback route
app.get('/*', (req, res) => {
    res.send("Funny Man");
})

app.listen(4000, () => {
    console.log(`Server is listening to PORT ${4000} E`)
})