let Chat_Box = document.querySelector('.chat-bot');
let Input_Text = document.querySelector('.chat-bot-messanger input');
let Send_Button = document.querySelector('.chat-bot-messanger button');

let Feed = document.querySelector('.chat-bot-feed');
function addMessage(){
    let MSG = document.createElement('div');
    MSG.classList.add('text');
    MSG.classList.add('your-msg');
    let IMG = document.createElement('img');
    MSG.innerText = Input_Text.value;
    IMG.src = 'https://media.licdn.com/dms/image/v2/D4D35AQHiPgDfpaShWg/profile-framedphoto-shrink_100_100/profile-framedphoto-shrink_100_100/0/1738264874586?e=1741294800&v=beta&t=U_isonpDF3FmiQ62b2qCl4ErwV04_yxt2eHZliDDdVU';
    MSG.appendChild(IMG);
    Feed.appendChild(MSG);
    Feed.scrollTop = Feed.scrollHeight;
}
Send_Button.addEventListener('click',addMessage);
Input_Text.addEventListener('keydown',(event)=>{
    if(event.key == 'Enter'){
        console.log("Enter Pressed");
        addMessage();
    }
});
