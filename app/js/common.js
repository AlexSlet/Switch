$(function () {

$('.hamburger').click(function(){
    $(this).toggleClass('is-active');
    $('.my-menu').toggleClass('menu--active');
});

// Anchor
var animate = {
    'time': 500,
    'randMin': 1000,
    'randMax': 1200
};

(function($) {

    function rand(min, max) {
        return Math.floor((Math.random() * (max - min + 1)) + min);
    }

    var defaults = {
        'randMin': 100,
        'randMax': 2000,
        'time': 1000
    };

    $(function() {

        var settings = $.extend(defaults, animate);

        $('a.animate').click(function(e) {
            e.preventDefault();

            var obj = $(this);
            var time = settings.time;

            if(obj.hasClass('rand')) {

                time = rand(settings.randMin, settings.randMax);

            } else {

                var result = /time[0-9]+/.exec(obj.attr('class'));
                if(result)
                    time = parseInt(new String(result).replace('time', ''));

            }

            $('html, body').animate({
                scrollTop: $(obj.attr('href')).offset().top
            }, time);

        });

    });
})(jQuery);

    //E-mail Ajax Send
    $("form").submit(function() { //Change
        var th = $(this);
        $.ajax({
            type: "POST",
            url: "../mail.php", //Change
            data: th.serialize()
        }).done(function() {
            alert("Thank you!");
            setTimeout(function() {
                // Done Functions
                th.trigger("reset");
            }, 1000);
        });
        return false;
    });

});
