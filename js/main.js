(function($) {
    /////////////////////////////////////////////////////
    // Hover slideshow
    /////////////////////////////////////////////////////
    if ($.fn.slideshowHover) {
        $('.gallery--slideshow').slideshowHover({
            item: '.gallery__item',
            speed: 2000,
            show: 'show',
            swipeOn: false,
            hover: true
        });
    }
}(jQuery));
