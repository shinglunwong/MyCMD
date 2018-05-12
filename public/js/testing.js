
$(document).ready(function () {

    $('.addresult').click(function (e) {
        e.preventDefault();

        let val = $('textarea.checkup').val();
        $('textarea').val(''); //('') <-- clear value in DOM
        $.ajax({
            url: '/api/xxx',
            method: 'post',
            data: {
                "query": val
            }
        }).done((data) => {
            $('#cal').html(`Calories: <span id='calories'>${data}</span>`);

        }).fail((err) => {
            console.log(err);
        })    
    });

    $('#save-calories').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: '/api/save-result',
            method: 'post',
            data: {
                "calories": $('#calories').text()
            }
        }).done((data) => {
            $('#cal').html(`Calories: ${data}`);

        }).fail((err) => {
            console.log(err);
        })
    });

    $('#logout').click(function (e) {
        e.preventDefault();

        $.ajax({
            url: '/logout',
            method: 'get',

        }).done().fail((err) => {
            console.log(err);
        })
    });

    // call get exercise list
        $.ajax({
            url: '/getExe',
            method: 'get',

        }).done((data) => {
            console.log(data);
            $('#getExe').children().remove();
            
        })
        .fail((err) => {
            console.log(err);
        })
});