//Base Code
const express = require('express');
const app = express();
const port = 8080;
const DB_Data = require('./DB/users.json');
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
app.get('/pro', (req, res) => {
    let { em: email, pass:password } = req.query;
    let USER = findUserFromDB(email,DB_Data);
    if (USER != {}) {
        if (USER.password == password) {
            res.render('feed', { USER });
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