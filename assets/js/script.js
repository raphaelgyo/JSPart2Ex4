//le addEventListener écoute l'évènement "load" sur l'élément "window" et appelle la fonction "loadPage" au chargement de la page html
window.addEventListener('load', loadPage);
//Déclaration de la fonction loadPage qui fait disparaître les blocs
function loadPage(){
  //au chargement de la page, l'état des blocks est sur display "none" pour les rendre invisibles
  document.getElementById('block1').style.display='none';
  document.getElementById('block2').style.display='none';
  document.getElementById('block3').style.display='none';
};
//le addEventListener écoute l'évènement "scroll" sur l'élément "window" et appelle la fonction "scrollVert" au défilement vertical de la page html
window.addEventListener('scroll', scrollVert);
//Déclaration de la fonction scrollVert qui fait apparaître les blocs
function scrollVert(){
  //Définition de la variable scrollValue pour récupérer la valeur du scroll vertical définit par la valeur "scrollY"
  var scrollValue = window.scrollY;
  //si la valeur de la valeur scrollValue est strictement supérieure à 100px alors,
  if(scrollValue > 100){
    //au défilement vertical de la page, l'état des blocks est sur display "block" pour les rendre visibles
    document.getElementById('block1').style.display='block';
    document.getElementById('block2').style.display='block';
    document.getElementById('block3').style.display='block';
  }
}
