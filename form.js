
$(function()
{
        $(document).ready(function () {
            var delay = 2000;
            $('.primary').click(function (e) {
                e.preventDefault();
                var name = $('#name').val();
                if (name == '') {
                    $('#name').attr({ 'placeholder': 'Enter a name please'});
                    $('#name').focus();
                    return false;
                }

                var surname = $('#surname').val();
                if (surname == '') {
                    $('#surname').attr({ 'placeholder': 'Enter a surname please' });
                    $('#surname').focus();
                    return false;
                }

                var email = $('#email').val();
                if (email == '') {
                    $('#email').attr({ 'placeholder': 'Enter an email address please' });
                    $('#email').focus();
                    return false;
                }
                if ($("#email").val() != '') {
                    if (!isValidEmailAddress($("#email").val())) {
                        $('#email').val("");
                        $('#email').attr({ 'placeholder': 'Provided email address is invalid. Please try again' });
                        $('#email').focus();
                        return false;
                    }
                }

                var tel = $('#tel').val();
                if (tel == '') {
                    $('#tel').attr({ 'placeholder': 'Enter a valid contact number' });
                    $('#tel').focus();
                    return false;
                }

                var category = $('#category').val();
                if (category == '') {
                    //$('.message_box').html(
                    //'<span style="color:red;">Enter Your category!</span>'
                    //);
                    $('#category').focus();
                    return false;
                }
                
                var message = $('#message').val();
                //if (message == '') {
                //    $('.message_box').html(
                //    '<span style="color:red;">Enter Your Message Here!</span>'
                //    );
                //    $('#message').focus();
                //    return false;
                //}

                $.ajax
                ({
                    type: "POST",
                    url: "ajax.php",
                    data: "&name=" + name + "&surname=" + surname + "&email=" + email + "&tel=" + tel + "&category=" + category + "&message=" + message,
                    beforeSend: function () {
                        $('.message_box').html(
                        '<img src="Loader.gif" width="25" height="25"/>'
                        );
                    },
                    success: function (data) {
                        setTimeout(function () {
                            $('.message_box').html(data);
                            $("#thankyouModal").modal('show');
                            $('#ContactForm')[0].reset();
                        }, delay);

                    }
                });
            });

        });

    //Email validation Function
    function isValidEmailAddress(emailAddress) {
        var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
        return pattern.test(emailAddress);
    };
    
});
