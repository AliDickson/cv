$('.message a').click(function() {
    $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

$(document).ready(function() {
    $("button").click(function() {
        alert("value: " + $("#sometext").val());
    });
});