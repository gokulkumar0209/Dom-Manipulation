const startStopBtn = document.querySelector('#startStopBtn');
const resetBtn = document.querySelector('#resetBtn');

let seconds=0;
let minutes=0;
let hours=0;
let sec
let min
let hrs
let timerInterval=null;
let timerStatus='stopped'
// Stop watch function
function stopWatch(){
    seconds++
    if(seconds/60===1){
        seconds=0
        minutes+=1
    }
    if(minutes/60===1){
        minutes=0
        hours+=1
    }
    sec=seconds
    if (seconds<10){
        sec='0'+seconds
    }
    min=minutes
    if(minutes<10){
        min='0'+minutes
    }
    hrs=hours
    if(hours<10){
        hrs='0'+hours
    }
    let displayTimer= document.getElementById('timer').innerText=hrs+":"+min+":"+sec;
}
// window.setInterval(stopWatch,1)
startStopBtn.addEventListener('click',function(){
    if(timerStatus==='stopped'){
        timerInterval=window.setInterval(stopWatch,1000);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-pause" id='pause'></i>`;
        timerStatus='started';
    }
    else{
        window.clearInterval(timerInterval);
        document.getElementById('startStopBtn').innerHTML=`<i class="fa-solid fa-play" id='play'></i>`;
        timerStatus='stopped'
    }
})

resetBtn.addEventListener('click',function(){
    window.clearInterval(timerInterval);
    seconds=0
    minutes=0
    hours=0
    document.getElementById('timer').innerHTML='00:00:00';
})