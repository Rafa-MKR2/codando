document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.carousel');
     M.Carousel.init(elems, 5);
  });




  function myFunction() {
    let event = window.scrollY
  if(event>120) {
    document.querySelector('header').classList.add("ativar");


 }else{
  document.querySelector('header').classList.remove("ativar")

 }

}

document.getElementById("menu1").addEventListener('click', function(){scrollEvent = 1;topFunction();});
document.getElementById("menu2").addEventListener('click', function(){scrollEvent = 2; topFunction();})
document.getElementById("menu3").addEventListener('click', function(){scrollEvent = 3; topFunction();})
document.getElementById("orcament-btn").addEventListener('click', function(){scrollEvent = 3; topFunction();})

var scrollEvent = 0;
var servico = document.getElementById("titulo-servico");
var portifolio = document.getElementById("portifolio");
var orcamento = document.getElementById("orcamento");
function topFunction() {

let screenWidth = 111;
let width = window.innerWidth || 
        document.documentElement.clientWidth || 
        document.body.clientWidth;

if(width<760) screenWidth=95

switch(scrollEvent){
  case 1:
  window.scroll({top: servico.offsetTop-screenWidth, behavior: 'smooth'});
  break;

  case 2:
     window.scroll({top: portifolio.offsetTop-screenWidth, behavior: 'smooth'});
  break;

  case 3:
  window.scroll({top: orcamento.offsetTop-screenWidth, behavior: 'smooth'});
  break;

  case false:
  window.scrollTo(0,0);
  break;
}

}