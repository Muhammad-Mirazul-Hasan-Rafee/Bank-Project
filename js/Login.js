document.getElementById("login-submit").addEventListener('click', function(){
    //get email
    
    const emailField = document.getElementById("user-email");
    const userEmail = emailField.value;

    //get user password

    const passwordField = document.getElementById("user-password");
    const userPassword = passwordField.value;
    //check email and password
    if(userEmail =='rafee@gmail.com' && userPassword =="1234"){
        window.location.href="Banking.html";
    }
});






