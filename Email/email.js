let email=document.getElementById('ln-email')
let password=document.getElementById('ln-password')
let login_btn=document.getElementById('login-btn')
let map=new Map()
let arr=[]
map.set('hulk@gmail.com','hulk@123')
map.set('thor@gmail.com','thor@123')
map.set('ironman@gamil.com','ironman@123')

login_btn.addEventListener('click',function(){
    
if(map.has(email.value)){
    // arr.push(email.value)
    if(map.get(email.value)==password.value){
        // arr.push(email.value)
        let login_container=document.querySelector('.login-container')
        login_container.style.display='none'
        let home_page_container=document.querySelector(".home-page-container")
        home_page_container.style.display='flex'
    }
}
})
