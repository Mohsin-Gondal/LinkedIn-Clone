let inputs_div = document.querySelector('.inputs');
let inputs_count = inputs_div.childElementCount;
for (let index = 1; index <= inputs_count; index++) {
    let input = document.querySelector(`.input-${index}`);
    input.addEventListener('focusin', () => {
        // console.log(input);
        input.querySelector('label').setAttribute('id', 'input-focused');

    });

    input.querySelector('input').addEventListener('focusout', () => {
        if(input.querySelector('input').value == ''){
            input.querySelector('label').removeAttribute('id');
        }
    })
}
