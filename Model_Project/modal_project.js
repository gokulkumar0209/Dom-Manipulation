let open=document.getElementById('open-btn')
let close=document.getElementById('close-btn')
let modal=document.getElementById('modal-container')

open.addEventListener('click',function(){
    modal.style.display='block';
});
close.addEventListener('click',function(){
    modal.style.display='none';
});