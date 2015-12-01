(function($) {

    console.log('ciao')
        /////////////////////////////////////////////////////
        // Hover slideshow
        /////////////////////////////////////////////////////
    if ($.fn.slideshowHover) {
        console.log('true')

        $('.gallery--slideshow').slideshowHover({
            item: '.gallery__link',
            speed: 2000,
            show: 'show',
            swipeOn: false,
            hover: true
        });

    }


}(jQuery));
