$(document).ready(function() {
    // Function to fade out and load content
    function loadAndFadeInContent(pageUrl) {
        $(".page-container").fadeOut(800, function() {
            $(".page-container").load(pageUrl, function() {
                    $(".page-container").fadeIn(800);
                });
            });
    };

    // Event delegation for menu buttons
    $("body").on("click", ".fadeAbout", function(event) {
        // Load and fade in content for About
        loadAndFadeInContent("Pages/about.html");
    });


    $("body").on("click", ".fadeEvents", function(event) {
        // Load and fade in content for Events
        loadAndFadeInContent("Pages/exhibitions-events.html");
    });

    $("body").on("click", ".fadeResume", function(event) {
        // Load and fade in content for Resume
        loadAndFadeInContent("Pages/resume.html");
    });
});
