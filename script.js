const hamburger = document.getElementById('hamburger');
const sideBar = document.querySelector('nav');

hamburger.addEventListener('click', ()=> {

    sideBar.classList.toggle('show');

})
