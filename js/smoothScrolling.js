$(document).ready(function () {
    $("a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var secureIdentity = this.hash;
            $('html, body').animate({
                scrollTop: $(secureIdentity).offset().top
            }, 800, function () {
                window.location.secureIdentity = secureIdentity;
            });
        }
    });
});

