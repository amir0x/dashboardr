let accountHolder = document.querySelector('.account-holder');
let sideLeft = document.querySelector('.mobile-menu');
let container = document.querySelector('.main-container');
let dropdownLi = document.querySelector('.inner-left-sidebar ul li.dropdown');
let menuUl = document.querySelector('.inner-left-sidebar ul li.dropdown ul');

accountHolder.addEventListener('click', ()=>{
    accountHolder.classList.toggle("open");

})
sideLeft.addEventListener('click', ()=>{
    container.classList.toggle("inserted");
    container.classList.toggle("sidebar-enable");
})


// side bar nav collapssse
document.addEventListener("DOMContentLoaded", function(){

    document.querySelectorAll('.inner-left-sidebar>ul>li .home-class').forEach(function(element){

        element.addEventListener('click', function (e) {

            let nextEl = element.nextElementSibling;
            let parentEl  = element.parentElement;	
            let childEl  = element.lastElementChild;
            // let childArrow = childEl.querySelector('.fa-chevron-down');

            // change dropdown icon
            if(nextEl.classList.contains('show')){
                // dropdown icon change
                childEl.classList.remove('fa-chevron-down');
                childEl.classList.add('fa-chevron-right');
            }else{

                console.log(childEl)
                // dropdown icon change
                childEl.classList.remove('fa-chevron-right');
                childEl.classList.add('fa-chevron-down');

            }


            if(nextEl) {
                e.preventDefault();	
                let mycollapse = new bootstrap.Collapse(nextEl);

                  if(nextEl.classList.contains('show')){

                      mycollapse.hide();

                  } else {
                      mycollapse.show();
                      // find other submenus with class=show
                      var opened_submenu = parentEl.parentElement.querySelector('.submenu.show');

                      // if it exists, then close all of them
                    if(opened_submenu){
                        new bootstrap.Collapse(opened_submenu);
                    }

                  }
              }

        });
    })

}); 
// DOMContentLoaded  end
