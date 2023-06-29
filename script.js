let button = document.getElementById('no');
let height = window.innerHeight - 50;
let width = window.innerWidth - 50;

button.addEventListener('mouseover', function () {
    button.style.position = "absolute";
    button.style.top = Math.random() * height + "px";
    button.style.left = Math.random() * width + "px";
})

const btn = document.querySelector('button')

btn.addEventListener('click', function() {
    alert("Vamos curtir então!!");
});