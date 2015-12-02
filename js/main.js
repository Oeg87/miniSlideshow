(function($) {
    /////////////////////////////////////////////////////
    // Hover slideshow
    /////////////////////////////////////////////////////
    if ($.fn.slideshowHover) {
        $('.gallery--slideshow').slideshowHover({
            item: '.gallery__link',
            speed: 2000,
            show: 'show',
            swipeOn: false,
            hover: true
        });
    }
}(jQuery));
