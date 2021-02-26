const bg = document.querySelector('.bg')
const percentage = document.querySelector('.percentage')
let blur = 100 

var idVar = setInterval(() => {
    if(blur != 0) {
        blur--
        bg.style.filter = "blur("+blur.toString()  + "px)"
        percentage.innerHTML = blur.toString() + "%"
    } else {
        myStopFunction()
    }
}, 30);
 
function myStopFunction() {
    clearInterval(idVar);
}
