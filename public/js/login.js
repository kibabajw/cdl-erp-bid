(function() {
    var formlogin = $("#form-login");

    var str_useremail = null;
    var str_userpassword = null;
    var spanerrorsformlogin = $("#span-errors-form-login");

    var useremail = $("#useremail");
    var userpassword = $("#userpassword");

    formlogin.on("submit", function(e) {
        e.preventDefault();

        str_useremail = useremail.val();
        str_userpassword = userpassword.val();

        if (str_useremail.length === 0) {
            spanerrorsformlogin.text("Email is required");
        } else if (str_userpassword.length === 0) {
            spanerrorsformlogin.text("Password is required");
        } else {
            spanerrorsformlogin.text("");

            window.location.replace("dashboard.html");
        }
    });
})();