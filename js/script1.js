let userLog= document.querySelector(".user-log")
let userInfo= document.querySelector(".user-info")
let logoutBtn= document.querySelector("#logout")
logoutBtn.addEventListener("click",function(r){
    r.preventDefault
    localStorage.setItem("loged",0);
})
if(localStorage.getItem("username")&& localStorage.getItem("loged")==1){
    userLog.style.display="none"
    userInfo.style.display="flex"
}else{
    userLog.style.display="flex"
    userInfo.style.display="none"
}
let user = document.querySelector("#user")
user.innerHTML=localStorage.getItem("username")