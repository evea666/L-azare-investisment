const menu = document.querySelector('.sous-menu1');
const btnmenu = document.querySelector('.locations');


btnmenu.addEventListener('click',function(){
    menu.classList.toggle('active-menu')
})
const menu2 = document.querySelector('.sous-menu2');
const btnmenu2 = document.querySelector('.biens');


btnmenu2.addEventListener('click',function(){
    menu2.classList.toggle('active-menu')
})

const menu3 = document.querySelector('.sous-menu3');
const btnmenu3 = document.querySelector('.langues');


btnmenu3.addEventListener('click',function(){
    menu3.classList.toggle('active-menu')
})

const nav = document.querySelector("nav");
const icons = document.querySelector('#icons');
icons.addEventListener("click", () => {
  nav.classList.toggle("active");
});

 gsap.to('.contenutotal .contenucentral3 .lot1',{y:-300,duration:0.5});
 gsap.to('.contenutotal .contenucentral3 .lot2',{y:-300,duration:1});
 gsap.to('.contenutotal .contenucentral3 .lot3',{y:-300,duration:0.5});
 gsap.from('.contenutotal .contenucentral4 .contenu',{y:650,duration:2});
 gsap.from('.contenutotal .contenucentral2 .contenu2',{y:650,duration:2});
 gsap.from('.contenutotal .contenucentral2 h1',{opacity:0,duration:2});
 gsap.from('.contenutotal .contenucentral2 .contenu2 h2',{opacity:0,duration:3, delay:1});
 gsap.from('.contenutotal .contenucentral3 h1',{opacity:0,duration:2,delay:0.2});
 gsap.from('.contenutotal .contenu4 .lot2',{y:650,duration:2});
 gsap.from('.contenutotal .contenu4 h1',{opacity:0,duration:2});
 gsap.from('.contenutotal .contenu4 .lot1',{x:-50,duration:2});
 gsap.from('.contenutotal .contenu5 .bloc',{y:650,duration:2});
 gsap.from('.contenutotal .contenu5 .lot1 h2',{opacity:0,duration:1,delay:0.2});








