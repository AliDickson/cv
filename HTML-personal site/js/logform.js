$(document).ready(function() {

    $("#btnsubmitid").on("click", function() 
    {
        let userTxt = $("#user").val();
        let midTxt = $("#middle").val();
        let passTxt = $("#pass").val();
        let alertDiv = $("#alertid");
        if (userTxt === "" || midTxt ==="" || passTxt === "") {

            alertDiv.fadeIn("slow");
            alertDiv.html("Please enter all fields");
        }
        else if(passTxt.length < 6)
        {
            alertDiv.fadeIn("slow");
            alertDiv.html("password should not less than six characters")
        }
        else{
            if(passTxt == passTxt.substring(0,6))
            {
                alertDiv.fadeIn("slow");
                alertDiv.removeClass("alert-danger");
                alertDiv.addClass("alert-success");
                alertDiv.html("Login successful");

                // localStorage.setItem("user", userTxt);
                // window.location.href = "success.html";
            }
            else
            {
                alertDiv.fadeIn("slow");
                alertDiv.removeClass("alert-success");
                alertDiv.addClass("alert-danger");
                alertDiv.html("Invalid username or password");
            }
        }
    });
});