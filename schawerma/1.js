let div =document.querySelector(".ni")
let wrapper = document.querySelector(".tlo")
let countP = document.querySelector(".count")
let img = document.querySelector(".img-donut")

let count = 0
let i = 1
let  imga = ["schaverma1.png","schaverma2.png", "schaverma3.png", "schaverm4.png", "schaverma5.png"]

function changer(){
    div.style.left = ((wrapper.clientWidth - div.clientWidth) * Math.random()) + "px";
    div.style.top = ((wrapper.clientHeight - div.clientHeight) * Math.random()) + "px";
    div.style.width = div.clientWidth + 10 + "px"
    if ( wrapper.clientWidth <=(div.clientWidth - 50) ||  (div.clientHeight - 50) >= wrapper.clientHeight){
        div.style.width = "50px"
        div.style.left = 0
    div.style.top = 0
    count ++
    countP.innerHTML= count
    img.src = imga[i]
    i++
    if (i >= imga.length){
        i=0
    }
    }
}
div.onpointerenter = function(){
    changer();
    console.log('kkkk');
    
}
