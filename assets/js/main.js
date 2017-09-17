$(document).ready(function() {
    window.sr = ScrollReveal({ reset: true, vFactor: 0.0 });
    sr.reveal('hr');
    sr.reveal('.row');

    particlesJS.load('particles-js', '/assets/json/particles.json', function() {
        console.log('particles.js loaded');
    });

    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 387.5, 'easeOutSine', function() {
                window.location.hash = hash;
            });
        }
    });
});


$(window).scroll(function() {
    if ($(this).scrollTop() > 50) {
        $('#scrollToTop:hidden').fadeIn();
    }
    else {
        $('#scrollToTop').fadeOut();
    }
});
