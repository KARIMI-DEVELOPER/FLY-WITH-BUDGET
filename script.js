// hamburger menu
var Menu = document.querySelector('#Menu');
var List = document.querySelector('#listMain');
var isOpen = false;
Menu.addEventListener("click", function () {
    if (!isOpen) {
        List.style.right = "0%"
        List.style.transitionDuration = "2s"
        Menu.style.zIndex = "1100"
    } else {
        List.style.right = "-100%"
        List.style.transitionDuration = "2s"
    }
    isOpen = !isOpen
})

