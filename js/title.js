$(document).ready(function() {
    function loadAndFadeInPages(pageUrl) {
        // After animations, load new content
            $(".page-container").fadeOut(800, function () {
                $(".page-container").load(pageUrl, function () {
                    $(".page-container").fadeIn(800);
                });
            });
    };
    // Event delegation for animated-page buttons
    $("body").on("click", ".fadeHome", function(event) {
        event.preventDefault();
        loadAndFadeInPages("index.html");
    });
});