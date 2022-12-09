let username = document.querySelector ("#signup_username")
let password = document.querySelector ("#signup_password")
let loginbtn = document.querySelector ("#loginbtn")
loginbtn.addEventListener("click", function(h){
    h.preventDefault
    if(password.value === "" || username.value === "" )
    alert ("please fill data below ")
    else{
        if(localStorage.getItem("username")=== username.value.trim() && localStorage.getItem("password") === password.value.trim()){
            setTimeout ( ()=> {
                window.location="index.html"
                localStorage.setItem("loged",1);
            },500)
        }
        else
        alert("error username or password ")
    }
})