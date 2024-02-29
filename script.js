var pointer = document.querySelector('.cur')

document.addEventListener('mousemove',function jkl(e){
    pointer.style.left = e.pageX + "px"
    pointer.style.top = e.pageY + "px"
})