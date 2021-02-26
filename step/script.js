const progress = document.getElementById('progress')
const prev = document.getElementById('prev')
const next = document.getElementById('next')
const circles = document.querySelectorAll('.circle')
const one = document.getElementById('1')
const two = document.getElementById('2')
const three = document.getElementById('3')
const four = document.getElementById('4')

let currentActive = 1;
 

next.addEventListener('click', () => {
    if(next.innerHTML === 'Next') {
        currentActive++
        prev.removeAttribute('disabled')

        if(currentActive > circles.length) {
            currentActive = circles.length
        }
        
        update()

    } else {
        console.log('mes tests constinuent')
    }
})

 
prev.addEventListener('click', () => {
    currentActive--
    if(currentActive < 1) {
        currentActive = 1
    }

    update()
})


function update() {
    let tabActive;
     circles.forEach((circle, index) => {


         if(index < currentActive) {
             circle.classList.add('active')
             document.getElementById((index+1).toString()).style.display = "none"
         } else {
            if(!tabActive) {
                tabActive = index
                document.getElementById(index.toString()).style.display = "block"
            } else {
                document.getElementById(index.toString()).style.display = "none"
            }
            circle.classList.remove('active')
         }


        console.log( document.getElementById((index+1).toString()))
     });
    
     const actives = document.querySelectorAll('.active');
     progress.style.width = (actives.length - 1) / (circles.length - 1) * 100  + "%";

     if(currentActive === 1) {
         prev.disabled = true
     } else if (currentActive === circles.length) {
        next.innerHTML = "Régister"
     } else {
        prev.disabled = false
        next.disabled = false
        next.innerHTML = "Next"
     }
    //  swithTabs()

     
}

