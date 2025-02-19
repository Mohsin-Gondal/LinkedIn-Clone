const express = require('express');
const path = require('path');
const app = express();
let port = 2100;

app.get('/home',(Request,Response)=>{
    Response.send('home Response');
});

app.listen(port, () => {
    console.log(`Server is Listening on Port ${port}`);
});