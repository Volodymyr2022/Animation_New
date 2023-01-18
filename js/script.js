"use strict"

window.addEventListener("load", () => {
    document.documentElement.classList.add('loaded')
});


// ---------Send Request

let sendReqest = document.querySelector('#input-btn');
// console.log(sendReqest);
let inptName = document.querySelector('#input-name');
let inptMail = document.querySelector('#input-mail');
let inpP = document.querySelector('#input-p');


sendReqest.addEventListener('click', function(e){
    saveContact();
})

function saveContact() {
    let userName = inptName.value;
    let userMail = inptMail.value; 
    let userP = inpP.value;

    localStorage.setItem('name', userName);
    localStorage.setItem('e-mail', userMail);
    localStorage.setItem('password', userP);


}