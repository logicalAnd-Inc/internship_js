function showPopup(imageSrc){
          document.getElementById('popup-image').src=imageSrc;
          document.getElementById('overlay').style.display='flex';
          document.body.classList.add('no-scroll');
        }