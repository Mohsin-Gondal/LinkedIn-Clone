let DB = {
    name :'Mohsin Raza',
    email:'innoxentmosu@gmail.com',
    password:'no_pass_here'
};
let email =  document.querySelector('input[name="email"]');
let password =  document.querySelector('input[name="password"]');
let signin_btn = document.querySelector('#sign-in-btn');
signin_btn.addEventListener('click',()=>{
    console.log(email.value);
    console.log(password.value);
})