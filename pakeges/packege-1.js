// packeges first
var DayOne = document.querySelector('#day-1');
var BtnOne = document.querySelector('#btn-1');
var ListOne = document.querySelector('#list-1');
var IsOpen = false;

BtnOne.addEventListener("click", function () {
    if (!IsOpen) {
        DayOne.style.height = "50vh";
        DayOne.style.overflow = "scroll";
        BtnOne.style.transform = "rotate(45deg)";
        ListOne.style.display = "block";
    } else {
        DayOne.style.height = "20vh";
        DayOne.style.overflow = "block";
        BtnOne.style.transform = "rotate(-45deg)";
        ListOne.style.display = "none";
    }
    IsOpen = !IsOpen; 
})