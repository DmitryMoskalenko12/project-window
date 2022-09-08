function showPicture() {
  const picturePopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');
        picturePopup.classList.add('popupimg');   
        workSection.appendChild(picturePopup);
        picturePopup.style.cssText = `
          display: none;
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 9;
          background-color: rgba(0, 0, 0, 0.5);
          align-items: center;
          justify-content: center`
        picturePopup.appendChild(bigImage);


        workSection.addEventListener('click', (e) => {
          e.preventDefault();

          let target = e.target;

          if (target && target.classList.contains('preview')) {
            picturePopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
          }

          if (target && target.matches('div.popupimg')) {
            picturePopup.style.display = 'none';
          }
        });


}
export default showPicture;