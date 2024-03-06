let email=document.getElementById('email')
let password=document.getElementById('password')
let login=document.getElementById('login-btn')
let map=new Map()
login.addEventListener('click',function(){
if(!map.has(email.value)){
    map.set(email.value,password.value)
}
})