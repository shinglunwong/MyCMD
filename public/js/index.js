$(function() {
    $("input[name='password2']").keyup(function() {
        if ($("input[name='password']").val() == $("input[name='password2']").val()) {
            $("p.validate").html('correct')
        } else {
            $("p.validate").html('not correct')
        }
      });


});