const circle = document.getElementById('circlee')
const yuti = document.getElementById('boxi')
const input = document.querySelector('.textInput')

circle.onclick = function () {
    document.body.classList.toggle('light-mode')
    circle.classList.toggle('whiteCirclerotate')
}
