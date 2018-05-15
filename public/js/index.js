$(function () {
    $("input[id='check-2']").keyup(function () {
        if ($("input[id='check-1']").val() == $("input[id='check-2']").val()) {
            $("p.validate").html('correct')
        } else {
            $("p.validate").html('not correct')
        }
    });

    let target = '';
    let email = [
        'shawn137080@gmail.com',
        'rtvk2004@hotmail.com',
        'shinglun.wong@gmail.com'
    ]
    $("div.namecard").click(function () {
        target = $('div.namecard').index(this);
        $('#target-input').val(email[target]);

    })

    $('#body, #subject').keyup(function () {
        let subject = '?subject=' + $('#subject').val();
        let body = '&body=' + $('#body').val();
        $('#send').attr('href', 'mailto:' + email[target] + subject + body)
    })

    $('.login-btn').click(function () {
        $('.login-form').show();
        $(".ghost-1").each(function (index) {
            $(this).delay(60 * index).fadeOut(60);
        });
        $(".ghost-2").each(function (index) {
            $(this).delay(60 * (4 - index)).fadeOut(60);
        });

        $('.login-form').prepend('<hr>')
        $(this).hide();
        $('.head-content').hide();
        $('.human-1').delay(500).animate({ color: "#500041" }, 'slow');
        $('.human-2').delay(500).animate({ color: "fff" }, 'slow');
    })








})
