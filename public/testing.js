
$(document).ready(function () {

    $('.addresult').click(function (e) {
        e.preventDefault();

        let val = $('textarea.checkup').val();
        $('textarea').val('');
        $.ajax({
            url: '/api/xxx',
            method: 'post',
            data: {
                "query": val
            }
        }).done((data) => {
            $('#cal').html(`Calories: ${data}`);
        }).fail((err) => {
            console.log(err);
        })
    //    .then(((body) => {
    //         console.log(body)
    //         let b = JSON.stringify(body.foods[0].nf_calories);
    //         $('#cal').html(`Calories: ${b}`);
    //         return b;
    //     }).then( b =>{
    //         $('#save-calories').click(function () {
    //             if (b.length > 0) {
    //                 knex('get').insert({ record: b });
    //             }
    //         })
    //     }).catch(err => {
    //             console.log(err);
    //         });
    });
});