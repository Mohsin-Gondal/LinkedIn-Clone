let select_tag = document.querySelector('#dis-lang');
let Languages_Array = []; //We get Data in this array from API which gets fired onload 


async function set_display_lang_DD() {
    getLanguages().then((result) => {
        for (const lang of Languages_Array) {
            console.log("Setting Lang Data");
            
            let option = document.createElement('option');
            option.innerText = lang;
            option.value = lang;
            select_tag.appendChild(option);
        }

    }).catch((err) => {
        console.log("ERROR - ",err);
    })
}
set_display_lang_DD();
