// document.addEventListener("click", (e) => {
//     const element1 = document.getElementsByClassName("active")[0]
//     element1.classList.remove('active')
//     const element = e.target
//     element.classList.add('active')
//     console.log(e.target)
// });

const panels = document.querySelectorAll('.panel')

panels.forEach(panel => {
    panel.addEventListener('click', () => {
        removeActiveClass()
        panel.classList.add('active')
    })
});

function removeActiveClass() {
    panels.forEach(panel => {
            panel.classList.remove('active')
    });
}