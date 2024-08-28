function hidePopup(event){
    if(event.target.id==='overlay'){
    document.getElementById('overlay').style.display='none';
    document.body.classList.remove('no-scroll');
  }}