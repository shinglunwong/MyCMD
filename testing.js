$(document).ready(function () {

    $('.addresult').click(function (e) {
        e.preventDefault();

        let val = $('textarea.checkup').val();

        $('textarea').val('');
        axios({
                url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
                method: 'post',
                headers: {
                    'x-app-key': '0cc29202aed5d97a53a5d8a530346f87',
                    'x-app-id': 'a0662efe',
                    'Content-ype': 'application/json'
                },
                data: {
                    "query": val
                },
                responseType: 'json'
            }).then(body => {
                console.log(body.data)
                let b = JSON.stringify(body.data.foods[0].nf_calories);
                $('#cal').html(`Calories: ${b}`);
            })
            .catch(err => {
                console.log(err);
            });
    });
});