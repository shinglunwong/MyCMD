const axios = require('axios');

axios({
    url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
    method: 'post',
    headers: {
        "x-app-id": "56cc25a1",
        "x-app-key": "74cb7ba3d3897d57092f67f6bde7cafe",
        "Content-Type": "application/json",
    },
    data: {
        "query":"2 eggs"
       },
    json: true 
 }).then(body => {
    console.log(body.data)
 }) 
 .catch(err => {
    console.log(err);
 });