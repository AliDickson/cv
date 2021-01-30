$(document).ready(function() {
    $("button").click(function() {
        $("img").addClass("styleclass");
    });
});


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
        $("#one").fadeOut(5000)
        $("#two").fadeOut("slow")
        $("#three").fadeOut(8000)
        $("#four").fadeOut("slow")
    })
})

$(document).ready(function() {
    $("button").click(function() {
        $("#one").fadeIn(5000)
        $("#two").fadeIn("slow")
        $("#three").fadeIn(8000)
        $("#four").fadeIn("slow")
    })
})


$("button").on("click", function() {
    $("#slide").slideUp("slow");
    $("#slide").slideDown("slow");
});
$("button").on("click", function() {
    $("#slide1").slideUp("slow");
    $("#slide1").slideDown("slow");
});
$("button").on("click", function() {
    $("#slide2").slideUp("slow");
    $("#slide2").slideDown("slow");
});
$("button").on("click", function() {
    $("#slide3").slideUp("slow");
    $("#slide3").slideDown("slow");
});



$(function() {
    $("#img1").draggable();
    $("#drop").droppable();
});