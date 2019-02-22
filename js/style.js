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
    if(butEvent == 1){
      window.scroll({top: servico.offsetTop-95, behavior: 'smooth'});


    }
    if(butEvent == 2){    
      window.scroll({top: portifolio.offsetTop-95, behavior: 'smooth'});


	}
    if(butEvent == 3){
        window.scroll({top: orcamento.offsetTop-95, behavior: 'smooth'});
	}
}