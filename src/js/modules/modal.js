function modal(trigger, close, modal) {

  const trigger1 = document.querySelectorAll(trigger),
        modal1 = document.querySelector(modal),
        close1 = document.querySelectorAll(close),
        scroll1 = scroll();

  function showModal(e) {
    e.preventDefault();
    modal1.style.display = 'block';
    document.body.style.overflow = 'hidden';
    document.body.style.marginRight = `${scroll1}px`;
  }

  function hideModal() {
    modal1.style.display = 'none';
    document.body.style.overflow = '';
    document.body.style.marginRight = `${0}px`;
  }

  modal1.addEventListener('click', (e) =>{
    if(e.target === modal1){
      hideModal();
    }
  });

  window.addEventListener('keydown', (e) => {
    if (e.code === 'Escape') {
     hideModal();
    }
   });

  function scroll() {
    const div = document.createElement('div');
    div.style.cssText = `
    width: 50px;
    height: 50px;
    visibility: hidden;
    overflow-y: scroll`;
    document.body.append(div);
    const result = div.offsetWidth - div.clientWidth;
    div.remove();
    return result    
  }
 

  trigger1.forEach(item => {
    item.addEventListener('click', showModal);
  });

  close1.forEach(item => {
    item.addEventListener('click', hideModal);
  });
}
export default modal;