$(document).ready(function() {
    var days = (function() {
        var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
        var secondDate = new Date(2018, 0, 13);
        var firstDate = new Date();
        return (secondDate.getTime() - firstDate.getTime()) / 1000;
    })();

    var clock = $('#countdown').FlipClock(days, {
        clockFace: 'DailyCounter',
        countdown: true
    });
});
