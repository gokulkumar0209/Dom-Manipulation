let email=document.getElementById('ln-email')
let password=document.getElementById('ln-password')
let login_btn=document.getElementById('login-btn')
let create_account_btn=document.getElementById('create-account')
// let map=new Map()
// let arr=[]
// map.set('hulk@gmail.com','hulk@123')
// map.set('thor@gmail.com','thor@123')
// map.set('ironman@gamil.com','ironman@123')

login_btn.addEventListener('click',function(){
    
if(localStorage.getItem(email.value)){
    // arr.push(email.value)
    if(localStorage.getItem(email.value)==password.value){
        // arr.push(email.value)
        let login_container=document.querySelector('.login-container')
        login_container.style.display='none'
        let home_page_container=document.querySelector(".home-page-container")
        home_page_container.style.display='flex'
    }
}
})
create_account_btn.addEventListener('click',function(){
    let login_container=document.querySelector('.login-container')
        login_container.style.display='none' 
    let signup_container=document.querySelector('.signup-container')   
        signup_container.style.display='flex' 
})

let si_email=document.getElementById('si-email')
let si_password=document.getElementById('si-password')
let si_btn=document.getElementById('signup-btn')
si_btn.addEventListener('click',function(){
    if(!localStorage.getItem(si_email.value)){
        localStorage.setItem(si_email.value,si_password.value)
        let signup_container=document.querySelector('.signup-container')   
        signup_container.style.display='none' 
        let login_container=document.querySelector('.login-container')
        login_container.style.display='flex' 

    }
})