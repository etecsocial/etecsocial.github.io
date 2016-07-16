// preloader
$(window).load(function() {
    $('.preloader').fadeOut(1000); // set duration in brackets    
});

$(function() {
    new WOW().init();
    $('.templatemo-nav').singlePageNav({
        offset: 70
    });

    /* Hide mobile menu after clicking on a link
    -----------------------------------------------*/
    $('.navbar-collapse a').click(function() {
        $(".navbar-collapse").collapse('hide');
    });
})

$(document).ready(function() {
    $('#enviar').validate({
        rules: {
            nome: {
                required: true,
                minlength: 3
            },
            email: {
                required: true,
                email: true
            },
            msg: {
                required: true,
                minlength: 3
            }
        },
        errorPlacement: function(a, b) {
            return true
        },
        highlight: function(a) {
            return $(a).closest('.form-control').css({
                border: "2px solid #900000"
            })
        },
        unhighlight: function(a) {
            return $(a).closest('.form-control').removeAttr("style")
        },
        submitHandler: function(b) {
            var c = $(b).serialize();
            $("#botao-submit").button('loading');
            $.ajax({
                type: "POST",
                url: "sendmail",
                data: c,
                dataType: 'json',
                success: function(a) {
                    $("#myModalLabel").html(a.titulo);
                    $("#modal-body").html(a.msg);
                    $('#myModal').modal('show');
                    $("#botao-submit").button('reset')
                }
            });
            return false
        }
    })
});
