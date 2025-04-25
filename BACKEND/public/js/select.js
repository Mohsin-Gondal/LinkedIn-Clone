let Selected = document.querySelector('#select p');
let options_div = document.querySelector('.options');
let options = document.querySelectorAll('.option');
function reset(){
    options_div.style.display='none';
    
    setTimeout(() => {
        options_div.removeAttribute('style');
    }, 1);
}
for (const option of options) {
    let heading = option.querySelector('p');
    option.addEventListener('click',(e)=>{
        Selected.innerText = heading.innerText;
        reset();
    });
}
//Jab Ksii K Hansny ki awaz ati hy dil sy 
//Acha Khasa Chehra Bigar Jata hy Phir sy