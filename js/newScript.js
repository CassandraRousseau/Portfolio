$(document).ready(function() {
    // Function to handle fading out, loading, and fading in content
    function loadAndFadeInPages(pageUrl) {
        // Clear animation classes from buttons
        $(".buttonL, .buttonR").removeClass("slide-out");

        // Slide out buttons
        $(".buttonL").each(function(index) {
            var $button = $(this);
            setTimeout(function() {
                $button.addClass("slide-out");
            }, index * 100); // Adjust the delay as needed
        });

        // Slide out right buttons
        $(".buttonR").each(function(index) {
            var $button = $(this);
            setTimeout(function() {
                $button.addClass("slide-out");
            }, index * 100); // Adjust the delay as needed
        });

        // After animations, load new content
        setTimeout(function() {
            $(".page-container").fadeOut(800, function() {
                $(".page-container").load(pageUrl, function() {
                    $(".page-container").fadeIn(800);
                });
            });
        });
    }

    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeAnim", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/animation.html");
    });

    $(".page-container").on("click", "#fadeDance", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/dance.html");
    });
    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeDes", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/design.html");
    });

    $(".page-container").on("click", "#fadeDraw", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/drawing.html");
    });
    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeGameDev", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/game-development.html");
    });

    $(".page-container").on("click", "#fadePaint", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/painting.html");
    });

    $(".page-container").on("click", "#fadePhoto", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/photography.html");
    });
    // Event delegation for animated-page buttons
    $(".page-container").on("click", "#fadeSculpt", function(event) {
        event.preventDefault();
        loadAndFadeInPages("Pages/sculpting.html");
    });

});
