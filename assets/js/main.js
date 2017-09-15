$(document).ready(function() {
    window.sr = ScrollReveal({ reset: true });
    sr.reveal('hr');
    sr.reveal('.col-12');
    sr.reveal('.row');
});

// scrolling //

$('a[href*=\\#]').on('click', function(event) {
    event.preventDefault();
    $('html,body').animate({ scrollTop: $(this.hash).offset().top }, easeOutSine, 500);
});

$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#scrollToTop:hidden').fadeIn();
    }
    else {
        $('#scrollToTop').fadeOut();
    }
});
