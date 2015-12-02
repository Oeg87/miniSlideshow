/////////////////////////////////////////////////////
// Hover slideshow
/////////////////////////////////////////////////////
(function($) {
    $.fn.slideshowHover = function(options) {
        //default options
        var settings = $.extend({
            item: '.gallery__item',
            speed: 1000,
            show: 'show',
            swipeOn: false,
            mouseHover: true
        }, options);

        return this.each(function() {
            //Variables
            //////////////////////////////////////////
            var counter = 1, // to keep track of current slide
                $items = $(this).find(settings.item),
                numItems = $items.length, // total number of slides
                isPaused = true;

            // this function showing the next or previous slide and hiding all the others
            //////////////////////////////////////////
            var showCurrent = function() {
                if (counter == -1) {
                    counter = numItems - 1;
                } else if (counter == numItems) {
                    counter = 0;
                }
                var itemToShow = Math.abs(counter % numItems);
                $items.removeClass(settings.show); // remove .show from whichever element currently has it
                $items.eq(itemToShow).addClass(settings.show);

            };

            //Start loaded page
            //////////////////////////////////////////
            if (settings.mouseHover == false) {
                var isPaused = false;

                $(this).hover(function(e) {
                    e.preventDefault();
                    isPaused = true;

                }, function(e) {
                    e.preventDefault();
                    isPaused = false;
                });
            }

            //setTimeout == Loop
            ///////////////////////////////////////////
            var t = window.setInterval(function() {
                if (!isPaused) {
                    $items.removeClass(settings.show);
                    $items.eq(counter % $items.length).addClass(settings.show);
                    counter++;
                }
            }, settings.speed);

            //start Slideshow in Hover 
            //////////////////////////////////////////
            if (settings.mouseHover == true) {

                $(this).hover(function(e) {
                    e.preventDefault();
                    isPaused = false;

                }, function(e) {
                    e.preventDefault();
                    isPaused = true;
                });
            }


            // if touch events are supported then add swipe interactions using TouchSwipe https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
            //////////////////////////////////////////
            if (settings.swipeOn == true && 'ontouchstart' in window) {
                $(this).swipe({
                    swipeLeft: function() {
                        counter++;
                        showCurrent();
                    },
                    swipeRight: function() {
                        counter--;
                        showCurrent();
                    }
                });
            }
        });
    };
}(jQuery));
