let pedro = document.querySelector(".p1")

let btn1 = document.querySelector(".dtn-1")
let btn2 = document.querySelector(".dtn-2")
let dtn3 = document.querySelector(".dtn-3")
let input = document.querySelector(".pole")
let dtn4 = document.querySelector(".dtn-4")
let count = 0 
let bied
let ageinsec

function writeText(){
    pedro.innerHTML = input.value

 

}
function DeleteText(){
    pedro.innerHTML = ""
    count = 0
    
    }
function tapayHamster(){
    
    bied= input.value + " " + count
    pedro.innerHTML = bied
    
    count++
        
        
        }
function Ageinseconds(){
    ageinsec= +input.value*365*24*60*60
    pedro.innerHTML = ageinsec
}        
btn1.onclick = writeText
btn2.onclick = DeleteText
dtn3.onclick= tapayHamster
dtn4.onclick= Ageinseconds
