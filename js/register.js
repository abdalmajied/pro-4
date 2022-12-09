let email = document.querySelector ("#signup_email")
let username = document.querySelector ("#signup_username")
let password = document.querySelector ("#signup_password")
let registerBtn = document.querySelector ("#registerbtn")  
if (localStorage.getItem("joinEmail")){
setTimeout ( ()=> {
    email.value = localStorage.getItem("joinEmail")
},1500)}
registerBtn.addEventListener("click", function(h){
    h.preventDefault
    if(email.value ==="" || password.value === "" || username.value === "" )
    alert ("please fill data below ")
    else{
        localStorage.setItem("email", email.value);
        localStorage.setItem("username", username.value);
        localStorage.setItem("password", password.value);
        setTimeout ( ()=> {
            window.location="login.html"
        },500)
    }
})