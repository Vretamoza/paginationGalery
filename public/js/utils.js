
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


// async function Main(file) {
//   console.log(await toBase64(file));
// }

// const toBase64 = file => new Promise((resolve, reject) => {
//   const reader = new FileReader();
//   reader.onload = () => {
//     const img = new Image
//     img.onload = () => resolve(img);
//     img.src = reader.result.toString();
//   }
//   reader.onerror = error => reject(error);
//   reader.readAsDataURL(file);
// });


function createImageFromFile(fileExplorer, title, desc){
  const file = fileSelector.files[0];
  Main(file)
  //return await toBase64(file);
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
