let check_box = document.querySelector('.check-box');
let box = document.querySelector('.box');
check_box.addEventListener('click',()=>{
    box.classList.toggle('box-checked');
})