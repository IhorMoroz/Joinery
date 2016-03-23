$(document).ready(function(){
    var heightStaticBlock = 67;
    $('a[href^="#"]').click(function(e){
        e.preventDefault();
        var target = this.hash,
        $target = $(target);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - heightStaticBlock
        }, 900, 'swing', function () {
            window.location.hash = target;
        });
    });
});
