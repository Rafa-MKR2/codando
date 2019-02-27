function myFunction() {
    let event = window.scrollY
  if(event>120) {
    document.querySelector('header').classList.add("ativar");
    document.querySelector('.logo').classList.add("logoM");  
    document.querySelector('.menu').classList.add("menuM");
 }else{
   document.querySelector('header').classList.remove("ativar")
   document.querySelector('.logo').classList.remove("logoM");  
   document.querySelector('.menu').classList.remove("menuM");
 }

}
