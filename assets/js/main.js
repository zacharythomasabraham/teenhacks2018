$(document).ready(function() {
    window.sr = ScrollReveal({ reset: true, vFactor: 0.0 });
    sr.reveal('hr');
    sr.reveal('.row');
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#scrollToTop:hidden').fadeIn();
    }
    else {
        $('#scrollToTop').fadeOut();
    }
});
