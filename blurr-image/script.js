const bg = document.querySelector('.bg')
const percentage = document.querySelector('.percentage')
let blur = 100 
let load = 0

var idVar = setInterval(() => {
    if(blur != 0) {
        blur--
        load++
        bg.style.filter = "blur("+blur.toString()  + "px)"
        percentage.innerHTML = scale(blur, 0, 100, 1, 0) + "%"
        // percentage.style.opacity = scale(load, 0, 100, 0, 1)
    } else {
        myStopFunction()
        percentage.style.opacity = 0
    }
}, 30);
 
function myStopFunction() {
    clearInterval(idVar);
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
  }
