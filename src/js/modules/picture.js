function showPicture() {
  const picturePopup = document.createElement('div'),
        workSection = document.querySelector('.works'),
        bigImage = document.createElement('img');
        picturePopup.classList.add('popup');
        workSection.appendChild(picturePopup);
        picturePopup.style.justifyContent ='center';
        picturePopup.style.alignItems = 'center';
        picturePopup.style.display = 'none';

        picturePopup.appendChild(bigImage);


        workSection.addEventListener('click', (e) => {
          e.preventDefault();

          let target = e.target;

          if (target && target.classList.contains('preview')) {
            picturePopup.style.display = 'flex';
            const path = target.parentNode.getAttribute('href');
            bigImage.setAttribute('src', path);
          }

          if (target && target.matches('div.popup')) {
            picturePopup.style.display = 'none';
          }
        });


}
export default showPicture;