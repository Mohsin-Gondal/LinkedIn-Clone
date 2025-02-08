function addAppSuggestion() {
    let card = document.createElement('div');
    card.classList.add('pop-up-card');
    let header = document.createElement('div');
    header.classList.add('better-go-to-app-header');
    let center = document.createElement('div');
    center.classList.add('better-go-to-app-center');
    let footer = document.createElement('div');
    footer.classList.add('better-go-to-app-footer');

    let logo = document.createElement('div');
    logo.classList.add('logo');
    let img = document.createElement('img');
    img.src = "img/logo2.png";
    logo.appendChild(img);
    let p = document.createElement('p');
    p.innerText = "LINKEDIN";
    logo.appendChild(p);
    header.appendChild(logo);
    let button = document.createElement('button');
    button.classList.add('single-svg-btn');
    button.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" id="close-small" aria-hidden="true"
                    role="none" data-supported-dps="16x16" fill="currentColor" focusable="false" class="lazy-loaded"
                    aria-busy="false">
                    <path
                        d="M14 3.41L9.41 8 14 12.59 12.59 14 8 9.41 3.41 14 2 12.59 6.59 8 2 3.41 3.41 2 8 6.59 12.59 2z">
                    </path>
                </svg>
`;
    header.appendChild(button);
    card.appendChild(header);
    let p2 = document.createElement('p');
    p2.innerText = 'LinkedIn is better on the app';
    center.appendChild(p2);
    let p3 = document.createElement('p');
    center.appendChild(p3);
    p3.innerText = "Don't have the app? Get it in the Microsoft Store.";
    card.appendChild(center);
    let button2 = document.createElement('button');
    button2.classList.add('btn');
    button2.classList.add('primary-outline-btn');
    button2.innerText = 'Open the app';

    button.onclick = function(){
        card.remove();
    }

    footer.appendChild(button2);
    card.appendChild(footer);

    document.body.appendChild(card);
}
window.addEventListener('onload',addAppSuggestion());
