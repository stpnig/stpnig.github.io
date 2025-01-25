let divFon = document.querySelector(".oclock")
let pHour = document.querySelector(".p-hour")
let pDay = document.querySelector(".p-day")
function Times(){
    let main = new Date();
    let hour = main.getHours()
    let minut = main.getMinutes()
    let sec = main.getSeconds()
    if (minut<10){minut = "0" + minut}
    if (sec<10){sec= "0" + sec}
    if (hour<10){hour = "0" + hour}
    pHour.innerHTML = hour + ":" + minut + ":" + sec
    let day = main.getDate()
    let month = main.getMonth()
    let year = main.getFullYear()
    let dayweek = main.getDay()
    let dayname = ["Неділя","Понеділок","Вівторок","Середа","Четвер","Пятниця","Субота"]
    let monthname = ["cічня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]
    pDay.innerHTML = dayname[dayweek] + " " + day + " " + monthname[month] +" " + year + " року"
    
    if(hour >=6 && hour <=11 ){
        divFon.style.backgroundImage = "url(morning.jpg)"
        console.log("1")
    }
    else if(hour>11 && hour <18){
        divFon.style.backgroundImage = "url(day.jpg)"
        console.log("2")
    }
    else if(hour>=18 && hour <=20){
        divFon.style.backgroundImage = "url(evening.jpg)"
        console.log("3")
    }
    else if(hour>20 || hour <6){
        divFon.style.backgroundImage = "url(night.jpg)"
        console.log("4")
    }
}
window.addEventListener('load',function(){
    this.setInterval(() => {
         Times()
    }, 1000);
       
       
})