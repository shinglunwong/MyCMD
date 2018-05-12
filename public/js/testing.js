
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
            console.log(data[0].name);
            $('select#check_exe').children().remove();
            for(let i = 0; i < data.length; i++){
                $( 'select#check_exe').append(`
                <option value='${data[i].id}'>${data[i].name}</option> `);
            }
            
        })
        .fail((err) => {
            console.log(err);
        })
});