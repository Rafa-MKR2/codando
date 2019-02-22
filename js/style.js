document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelector('.carousel');
    var instances = M.Carousel.init(elems, 5);
  });





  document.getElementById("menu1").addEventListener('click', function(){butEvent = 1;topFunction();});
document.getElementById("menu2").addEventListener('click', function(){butEvent = 2; topFunction();})
document.getElementById("menu3").addEventListener('click', function(){butEvent = 3; topFunction();})
var butEvent = 0;
var servico = document.getElementById("titulo-servico");
var portifolio = document.getElementById("portifolio");
var orcamento = document.getElementById("orcamento");
function topFunction() {

let screenWidth = 111;
let width = window.innerWidth || 
        document.documentElement.clientWidth || 
        document.body.clientWidth;

if(width<760) screenWidth=95
        if(butEvent == 1){

      window.scroll({top: servico.offsetTop-screenWidth, behavior: 'smooth'});

    }
    if(butEvent == 2){    
      window.scroll({top: portifolio.offsetTop-screenWidth, behavior: 'smooth'});


	}
    if(butEvent == 3){
        window.scroll({top: orcamento.offsetTop-screenWidth, behavior: 'smooth'});
	}
}