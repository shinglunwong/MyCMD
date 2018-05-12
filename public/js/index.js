$(function() {
    $("input[name='password2']").keyup(function() {
        if ($("input[name='password1']").val() == $("input[name='password2']").val()) {
            $("p.validate").html('correct')
        } else {
            $("p.validate").html('not correct')
        }
      });


});