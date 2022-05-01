
function createImage(url, title, desc){
  const newImage = {
    title: title,
    description: desc,
    imageURL: url
  }
  return newImage
}

function createImageNode(url){
  let img = document.createElement('img')
  img.src = url
  img.className = 'w-56 h-56'
  return img
}


const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.onload = () => {
    resolve(reader.result);
  }
  reader.onerror = error => reject(error);
  reader.readAsDataURL(file);
});


async function createImageFromFile(fileExplorer, title, desc){
  let file = fileExplorer.files[0]
  let url = await toBase64(file)
  let img = createImage(url, title, desc)
  return img
}

function loadPages(arrayImages, paginas){
  let tam = arrayImages.length
  if(tam == 0) return 0
  let pages = (tam % 6 == 0)? Math.trunc(tam/6): Math.trunc(tam/6) + 1
  for (let i = 1; i <= pages; i++) {
    let page = document.createElement('li')
    page.className = 'page'
    page.innerHTML = `<a href="#">${i}</a>`
    paginas.appendChild(page)
  }
  return 1
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
      let img = createImageNode(arrayImages[i].imageURL)
      gallery.appendChild(img)
    }
  }
}


export  {createImage, addNewPage, renderImages, createImageFromFile, loadPages}
