const axios = require('axios');

async function getData() {
    let Data = await axios.get('https://www.linkedin.com/feed/');
    console.log(Data);
    console.log("Getting Data");
}

getData();