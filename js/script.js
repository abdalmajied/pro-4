let userLog= document.querySelector(".user-log")
let userInfo= document.querySelector(".user-info")
let registerBtn = document.querySelector(".main-link")
let mainDet = document.querySelector(".main-details")
let logoutBtn= document.querySelector("#logout")
logoutBtn.addEventListener("click",function(r){
    r.preventDefault
    localStorage.setItem("loged",0);
})

let user = document.querySelector("#user");
user.innerHTML=localStorage.getItem("username");

if(localStorage.getItem("username")&& localStorage.getItem("loged")==1){
    userInfo.style.display="flex"
    userLog.style.display="none"
    registerBtn.style.display="none"
    mainDet.innerHTML= "Welcome Back "+localStorage.getItem("username") + " you can browser the site as user "
}else{
    userInfo.style.display="none"
    userLog.style.display="flex"
    registerBtn.style.display="block"
}
let getStart =document.querySelector("#start")
let joinEmail = document.querySelector(".join-input")
getStart.addEventListener("click", () => {
    if(joinEmail.value==="")
    alert("please enter your email")
    else{
        localStorage.setItem("joinEmail", joinEmail.value.trim() );
        window.location = "register.html"
    }
})
