//Base Code
const express = require('express');
const app = express();
const port = 8080;
const DB_Data = require('./DB/users.json');
const POSTS = require('./DB/posts.json');
const SUGG_PROFs = require('./DB/suggestions.json');
app.use(express.urlencoded({ extended: true }));
//Setting up EJS
app.set('view engine', 'ejs');
app.use(express.static('public'));
//Listeners
app.listen(port, () => {
    console.log(`Server Started On Port ${port}`);
});
//Routes
app.get('/home', (req, res) => {
    res.render('home');
});
app.post('/pro', (req, res) => {
    let { em: email, pass: password } = req.body;
    let USER = findUserFromDB(email, DB_Data);
    if (USER != {}) {
        if (USER.password == password) {
            res.render('feed', { USER, POSTS,SUGG_PROFs });
        } else {
            console.log("Password didn't match");
        }
    } else {
        console.log("User not found");
    }
});
app.get('/login', (req, res) => {
    res.render('login');
});


//Code
function findUserFromDB(email, Database_Json) {
    for (const User of Database_Json.users) {
        if (User.email === email) {
            return User;
        }
    }
    return {};
}