function allInfo(obj) {
  const windows = document.querySelectorAll('.balcon_icons_img'),
        width = document.querySelectorAll('#width'),
        height = document.querySelectorAll('#height'),
        range = document.querySelectorAll('#view_type'),
        checkbox = document.querySelectorAll('.checkbox');
        
        function bindElements(event, elem, prop) {
          elem.forEach((item, i) =>{

            if (item.nodeName === 'SELECT') {
              obj[prop] = 'tree';
            }else{
              obj[prop] = 0;
            }
            
            item.addEventListener(event, () =>{
              switch (item.nodeName) {
                case 'SPAN':
                  obj[prop] = i;
                  break;
                case 'INPUT':
                  if (item.getAttribute('type') === 'checkbox') {
                    elem.forEach((elem, j) =>{
                      elem.checked = false;
                      if (i === j) {
                        elem.checked = true;
                      }
                    });
                    i === 0 ? obj[prop] = 'Холодне' : obj[prop] = 'Тепле';
                  }else{
                    obj[prop] = item.value;
                  }
                  break;
                case 'SELECT':
                  obj[prop] = item.value;
                  break;  
                default:
                  break;
              }
            });
          });
        }
        bindElements('click', windows, 'window');
        bindElements('input', width, 'width');
        bindElements('input', height, 'height');
        bindElements('input', range, 'select');
        bindElements('change', checkbox, 'property');
}
export default allInfo;