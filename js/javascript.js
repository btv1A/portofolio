//toogle (untuk membuat yang ada jadi gak ada, yang gak ada jadi ada) class active
const navbarNav = document.querySelector('.navbar-nav');
document.querySelector('#menu').onclick=()=>{
    navbarNav.classList.toggle('active');
};

//sidebar menghilang jika mengklik dimana saja
const menuu = document.querySelector('#menu');

document.addEventListener('click', function(e){
    if (!menuu.contains(e.target) && !navbarNav.contains(e.target)){
        navbarNav.classList.remove('active');
    }
});
