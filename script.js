function ajustarContainer(){
  const container = document.getElementById('container');

  if (window.innerWidth <= 700) {
    container.style.width = '100%'
    container.style.marginTop = '0';
  } else if(window.innerWidth  >700 && window.innerWidth <=1200){
        container.style.width = '70%'
        
  }else{
        container.style.width = '40%'
  }
}
window.addEventListener('load', ajustarContainer);
window.addEventListener('resize', ajustarContainer);