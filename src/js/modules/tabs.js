function tab(selector, tab, content, activeClass) {
  const parent = document.querySelector(selector),
        tabs = document.querySelectorAll(tab),
        content1 = document.querySelectorAll(content);
        
  function hideContent() {
    content1.forEach(item => {
    item.style.display = 'none';
    })
    tabs.forEach(tab => {
    tab.classList.remove(activeClass);
    })
  }
  
  function showContent(i = 0) {
    content1[i].style.display = 'block';
    tabs[i].classList.add(activeClass);
  }

  hideContent();
  showContent();
 

  parent.addEventListener('click', (e) => {
  if (e.target && e.target.classList.contains(tab.replace(/\./ig, '')) || e.target.parentNode.classList.contains(tab.replace(/\./ig, ''))) {
    tabs.forEach((item, i) =>{
     if(e.target === item || e.target.parentNode === item){
      hideContent();
      showContent(i);
     }
    });
  }
  });
}
export default tab;