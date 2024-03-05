input=document.getElementById("task-to-do")
confirm=document.getElementById("add-task")
list=document.getElementById('task-table')
confirm.addEventListener('click',function(){
    element=document.createElement('li')
    element.innerText=input.value
    list.appendChild(element)
})