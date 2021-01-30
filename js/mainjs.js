const submitBtn = document.getElementById("button");

submitBtn.addEventListener("click", function() {
    let userTxt = document.getElementById("userid").value;
    let useTxt = document.getElementById("useid").value;
    let usersTxt = document.getElementById("usersid").value;
    let mailTxt = document.getElementById("mailid").value;
    let passTxt = document.getElementById("passid").value;
    let ageTxt = document.getElementById("ageid").value;
    let birthTxt = document.getElementById("birthid").value;
    let genTxt = document.getElementById("genid").value;
    let alertDiv = document.getElementById("alertid");

    if (userTxt === "" ||useTxt === "" || usersTxt ==="" || mailTxt === "" || passTxt === "" || ageTxt ===  "" || birthTxt === "" || genTxt === "") {

        alertDiv.style.display = "block";
        alertDiv.innerHTML = `Please Enter all field`;
    }
});