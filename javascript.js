const btnToggle = document.querySelector('.btn-toggle');
const coll = document.querySelector('.coll');
const sub = document.querySelector('.sub');
var navlink1 = document.querySelector('.nav__link1');
var navlink2 = document.querySelector('.nav__link2');
var navlink3 = document.querySelector('.nav__link3');
var navlink4 = document.querySelector('.nav__link4');



btnToggle.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});

coll.addEventListener('click', function(){
    document.body.classList.toggle('nav-open');
});
sub.addEventListener('click', function(){
    document.body.classList.remove('nav-open');
});

    navlink1.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
    });
    navlink2.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
    });
    navlink3.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
    });
    navlink4.addEventListener('click', function(){
        document.body.classList.remove('nav-open');
    });


  
  
    
      