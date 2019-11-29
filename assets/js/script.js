window.addEventListener('load', load);
function load(){
  document.getElementById('block1').style.display='none';
  document.getElementById('block2').style.display='none';
  document.getElementById('block3').style.display='none';
};
window.addEventListener('scroll', scrollo);
function scrollo(){
  var scrollValue = window.scrollY;
  if(scrollValue > 100){
    document.getElementById('block1').style.display='block';
    document.getElementById('block2').style.display='block';
    document.getElementById('block3').style.display='block';
  }
}
