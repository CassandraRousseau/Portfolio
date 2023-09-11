$(document).ready(function() {
    $("#fadeHome").on("click", function() {
        // Animate the buttons to slide out to the left for buttonL with a delay between each row
        $(".buttonL").each(function(i) {
            const delay = i * 300; // Adjust the delay time as needed
            setTimeout(() => {
                $(this).css({
                    transform: 'translateX(-300px)',
                    opacity: '0'
                });
            }, delay);
        });

        // Animate the buttons to slide out to the right for buttonR with a delay between each row
        $(".buttonR").each(function(i) {
            const delay = i * 300; // Adjust the delay time as needed
            setTimeout(() => {
                $(this).css({
                    transform: 'translateX(300px)',
                    opacity: '0'
                });
            }, delay);
        });

        // After the animation is complete, redirect to index.html
        setTimeout(function() {
            window.location.href = "index.html";
        }, 1000 + $(".buttonL").length * 400); // Delay the redirection based on the total animation duration
    });
});