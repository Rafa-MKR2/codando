var index = new Index();
var get = document.querySelector.bind(document)

document.addEventListener('DOMContentLoaded', ()=> {
    var elems = get('.carousel');
     M.Carousel.init(elems, 5);

  });


get("#menu1").addEventListener('click', ()=>{scrollEvent = 'servico';   scrollMenu();});
get("#menu2").addEventListener('click', ()=>{scrollEvent = 'portifolio'; scrollMenu();})
get("#menu3").addEventListener('click', ()=>{scrollEvent = 'orcamento'; scrollMenu();})
get("#orcament-btn").addEventListener('click',()=>{scrollEvent = 'orcamento'; scrollMenu();})

var scrollEvent = '';
var servico = get("#titulo-servico");
var portifolio = get("#portifolio");
var orcamento = get("#orcamento");



function scrollMenu() {

let screenWidth = 94.8;
let width = window.innerWidth || 
        document.documentElement.clientWidth || 
        document.body.clientWidth;

if(width<760) screenWidth=100

switch(scrollEvent){
  case 'servico':
  window.scroll({top: servico.offsetTop-screenWidth, behavior: 'smooth'});
  break;

  case 'portifolio':
     window.scroll({top: portifolio.offsetTop-screenWidth, behavior: 'smooth'});
  break;
  
  case 'orcamento':
  window.scroll({top: orcamento.offsetTop-screenWidth, behavior: 'smooth'});
  break;

  case '':
  window.scrollTo(0,0);
  break;
}

}
