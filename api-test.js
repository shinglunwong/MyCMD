const nutritionix = require('./config/key').nutritionix;
const axios = require('axios');


// axios.post({
//     url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
//     header: nutritionix,
//     data: {
//       'query': 'egg'
//     }
//   });


const getBreeds = async () => {
    try {
        return await axios({
            method: 'post',
            url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
            headers: {
                'x-app-key': '0cc29202aed5d97a53a5d8a530346f87',
                'x-app-id': 'a0662efe',
                'Content-ype': 'application/json'
            },
            responseType: 'text',
            data:{

                    "query":"2 slices of white bread",
                    "timezone": "US/Eastern"
                   
               
            }

        }).then(function (response) {
            console.log(response.data);
        })
    } catch (error) {
        console.error(error)
    }
}

const countBreeds = async () => {
    const breeds = await getBreeds()

    if (breeds.data.message) {
        console.log(`Got ${Object.entries(breeds.data.message).length} breeds`)
    }
}

countBreeds()