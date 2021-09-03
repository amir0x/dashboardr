let accountHolder = document.querySelector('.account-holder');
let sideLeft = document.querySelector('.mobile-menu');
let container = document.querySelector('.container');
let dropdownLi = document.querySelector('.inner-left-sidebar ul li.dropdown');
let menuUl = document.querySelector('.inner-left-sidebar ul li.dropdown ul');

accountHolder.addEventListener('click', ()=>{
    accountHolder.classList.toggle("open");
})
sideLeft.addEventListener('click', ()=>{
    container.classList.toggle("inserted");
    container.classList.toggle("sidebar-enable");
})

// dropdownLi.addEventListener('click', ()=>{
//     menuUl.classList.toggle("active");
// })