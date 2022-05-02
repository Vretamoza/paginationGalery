import {
  createImage,
  addNewPage,
  renderImages,
  createImageFromFile,
  loadPages
} from './utils.js'

let gallery = document.querySelector('#gallery')
let paginas = document.querySelector('#paginas')
let imgTitle = document.querySelector('#title')
let imgDesc = document.querySelector('#desc')
let urlInput = document.querySelector('#urlInput')
let fileExplorer = document.querySelector('#file-explorer')
let selector = document.querySelector('#load-options')
let submitButton = document.querySelector('#sumbit-image')
let lastButton = document.querySelector('#last-page')
let nextButton = document.querySelector('#next-page')
let pageItems = paginas.childNodes

let arrayImages = []

let images = localStorage.getItem('images')
if(images){
  arrayImages = JSON.parse(images)
}

renderImages(arrayImages, 1, gallery)
let pagina = loadPages(arrayImages, paginas)

selector.addEventListener('change', (e) => {
  if (selector.value == 'url'){
      urlInput.classList.remove('hidden')
      fileExplorer.classList.add('hidden')
  }
  if (selector.value == 'local'){
      urlInput.classList.add('hidden')
      fileExplorer.classList.remove('hidden')
  }
})


submitButton.addEventListener('click', async (e) => {
  let title = imgTitle.value
  let desc = imgDesc.value
  let url = urlInput.value

  if(!title || !desc) return alert('Todos los campos son obligatorios')

  if(arrayImages.length % 8 == 0){
    pagina++
    let page = addNewPage(pagina)
    paginas.appendChild(page)
  }

  if(selector.value == 'url'){
    if(!url) alert('Ingrese una url')
    let img = createImage(url, title, desc)
    arrayImages.push(img)
    renderImages(arrayImages, pagina, gallery)
    localStorage.setItem("images", JSON.stringify(arrayImages))
  }else{
    if(!fileExplorer.files[0]) return
    let img = await createImageFromFile(fileExplorer, title, desc)
    arrayImages.push(img)
    renderImages(arrayImages, pagina, gallery)
    localStorage.setItem("images", JSON.stringify(arrayImages))
  }


  imgTitle.value = ''
  imgDesc.value = ''
  urlInput.value = ''
  fileExplorer.value = ''
})

pageItems.forEach(page => {
  page.addEventListener('click', (e) => {
    renderImages(arrayImages, page.textContent, gallery)
    pagina = page.textContent
  })
})

lastButton.addEventListener('click', (e) => {
  if(pagina == 1){
    return
  }
  pagina--
  renderImages(arrayImages, pagina, gallery)
})

nextButton.addEventListener('click', (e) => {
  if(pagina == pageItems.length){
    return
  }
  pagina++
  renderImages(arrayImages, pagina, gallery)
})



