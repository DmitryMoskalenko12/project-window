
function form(form) {
  const forms = document.querySelectorAll(form);

  const message = {
    loading: 'Дані завантажуються...',
    success: 'Дякуємо! Дані отримано!',
    failure: 'Виникла помилка при отправці данних'
  }

  forms.forEach(form =>{
  form.addEventListener('submit', (e) =>{
    e.preventDefault();

    async function postData(url, data) {
      let res = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: data
      })

      return await res.json();
    }

    const infoBlock = document.createElement('div');
    infoBlock.textContent = message.loading;
    form.appendChild(infoBlock);

    const formData = new FormData(form);
    const json = JSON.stringify(Object.fromEntries(formData.entries()));
    postData('http://localhost:3000/result', json)
    .then(() => {
      infoBlock.textContent = message.success;
      setTimeout(() =>{
        infoBlock.remove()
      }, 3000);
    })
    .catch(() =>{
      infoBlock.textContent = message.failure;
      setTimeout(() =>{
        infoBlock.remove()
      }, 3000);
    })
    .finally(() =>{
      form.reset();
    })
  });
});
}
export default form;