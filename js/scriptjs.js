$(document).ready(function() {
    $("#button").on("click", function() {

        let userTxt = $("#userid").val();
        let useTxt = $("#useid").val();
        let usersTxt = $("#usersid").val();
        let mailTxt = $("#mailid").val();
        let passTxt = $("#passid").val();
        let ageTxt = $("#ageid").val();
        let birthTxt = $("#birthid").val();
        let genTxt = $("#genid").val();
        let alertDiv = $("#alertid");
        if (userTxt === "" ||useTxt === "" || usersTxt ==="" || mailTxt === "" || passTxt === "" || ageTxt ===  "" || birthTxt === "" || genTxt === "") {

            alertDiv.fadeIn("slow");
            alertDiv.html("Please enter all field");
        }
        else if(userTxt.length < 5) {
            alertDiv.fadeIn("slow");
            alertDiv.html("Charaters should not less than six")
        }
        else {
            if(useTxt == userTxt.substring(0,5))
            {
                alertDiv.fadeIn("slow");
                alertDiv.removeClass("alert-danger");
                alertDiv.addClass("alert-success");
                alertDiv.html("Login successful");
                
                localStorage.setItem("user", userTxt);
                window.location.href = "success.html";
            }
        }
    });
});