let DB = {
    name :'Mohsin Raza',
    email:'innoxentmosu@gmail.com',
    password:'no_pass_here'
};
let email =  document.querySelector('input[name="email"]');
let password =  document.querySelector('input[name="password"]');
let signin_btn = document.querySelector('#sign-in-btn');
signin_btn.addEventListener('click',()=>{
    if(email.value === DB.email && password.value === DB.password){
        console.log("Login Successfull");
        window.location.href = 'index.html'
    }else{
        console.log("Login Unsuccessfull");
    }
    console.log(email.value);
    console.log(password.value);

});
document.addEventListener('keydown',(e)=>{
    if(e.key == 'Enter'){
        console.log("Sign up Button Pressed through Docuement Event");
        signin_btn.dispatchEvent(new Event('click'));
    }
})