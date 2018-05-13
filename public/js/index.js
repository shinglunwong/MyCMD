import { SSL_OP_NO_SESSION_RESUMPTION_ON_RENEGOTIATION } from "constants";

$(function() {
    $("input[name='password2']").keyup(function() {
        if ($("input[name='password']").val() == $("input[name='password2']").val()) {
            $("p.validate").html('correct')
        } else {
            $("p.validate").html('not correct')
        }
    });

    $("div.namecard").click(function () {
        let index = $('div.namecard').index(this);
        switch (index) {
            case 0:
                $('#target-input').val('shawn137080@gmail.com')
                break;
            case 1:
                $('#target-input').val('rtvk2004@hotmail.com')
                break;
            case 2:
                $('#target-input').val('shinglun.wong@gmail.com')
                break;
            default:
                break;
        }
    })
})


