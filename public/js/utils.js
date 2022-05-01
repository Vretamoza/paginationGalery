const IMG_TEMPLATE = new Image
IMG_TEMPLATE.className = 'w-56 h-56'


function createImage(url, title, desc){
  const newImage = {
    title: title,
    description: desc,
    imageURL: url
  }
  return newImage
}


async function Main(file) {
  console.log(await toBase64(file));
}

const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    const img = new Image
    img.onload = () => resolve(img);
    img.src = reader.result.toString();
  }
  reader.onerror = error => reject(error);
  reader.readAsDataURL(file);
});


function createImageFromFile(fileExplorer, title, desc){
  const file = fileSelector.files[0];
  Main(file)
  return await toBase64(file);
}


function addNewPage(pagina){
  let page = document.createElement('li')
  page.className = 'page'
  page.innerHTML = `<a href="#">${pagina}</a>`
  return page
}


function renderImages(arrayImages, page, gallery){
  gallery.textContent = '';
  const initial = ((page - 1) * 6)
  const final = page * 6
  for(let i = initial; i < final; i++){
    if(arrayImages[i]){
      IMG_TEMPLATE.src = arrayImages[i].imageURL
      gallery.appendChild(IMG_TEMPLATE)
    }
  }
}


export  {createImage, addNewPage, renderImages, createImageFromFile}
