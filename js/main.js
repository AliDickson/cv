$(document).ready(function() {
    $("#hide").click(function() {
        $("img").hide();
    });
    $("#show").click(function() {
        $("img").show();
    });
});

$(document).ready(function() {
    $("button").click(function() {
        $("#one").fadeOut(4000)
        $("#two").fadeOut(6000)
        $("#three").fadeOut(8000)
        $("#four").fadeOut(10000)
    });
});

$(document).ready(function() {
    $("#fadein").click(function() {
        $("#one").fadeIn(2000)
        $("#two").fadeIn(4000)
        $("#three").fadeIn(6000)
        $("#four").fadeIn(8000)
    });
});


$("#slide-up").on("click", function() {
    $("#slide").slideUp(3000);
});

$("#slide-down").on("click", function() {
    $("#slide").slideDown(2000);
});

$(document).ready(function() {
    $("input").on("keypress", function() {
        $("P").hide();
    });
});
