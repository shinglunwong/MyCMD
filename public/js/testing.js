const apikey = './../../config/key'.nutritionix;



$(document).ready(function () {

    $('.addresult').click(function (e) {
        e.preventDefault();

        let val = $('textarea.checkup').val();

        $('textarea').val('');
        axios({
                url: 'https://trackapi.nutritionix.com/v2/natural/nutrients',
                method: 'post',
                headers: apikey,
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