const eventosWorks = [
    { title: 'Andamios multi', src: './assets/works/eventos-estructuras/andamios-multi-76-2_o.jpg' },
    { title: 'Escenario canteras', src: './assets/works/eventos-estructuras/escenario-canteras-77-2_o.jpg' },
    { title: 'Escenario temático', src: './assets/works/eventos-estructuras/escenario-tema-tico-78-2_o.jpg' },
    { title: 'Free standing', src: './assets/works/eventos-estructuras/free-standing-79-2_o.jpg' },
    { title: 'Gradas sagrada familia', src: './assets/works/eventos-estructuras/gradas-sagrada-familia-80-2_o.jpg' },
    { title: 'Gradas san josé la providencia', src: './assets/works/eventos-estructuras/gradas-san-jose-la-providencia-81-2_o.jpg' },
    { title: 'Gradas unit', src: './assets/works/eventos-estructuras/gradas-unit-82-2_o.jpg' },
    { title: 'Grupo abc carteleria', src: './assets/works/eventos-estructuras/grupo-abc-carteleria-83-2_o.jpg' },
    { title: 'Mangrullo', src: './assets/works/eventos-estructuras/mangrullo-84-2_o.jpg' },
    { title: 'Montaje cuctsa', src: './assets/works/eventos-estructuras/montaje-cuctsa-85-2_o.jpg' },
    { title: 'Pantalla led teatro verano', src: './assets/works/eventos-estructuras/pantalla-led-teatro-verano-86-2_o.jpg' },
    { title: 'Vallas', src: './assets/works/eventos-estructuras/vallas-87-2_o.jpg' },
    { title: 'Vallas nuevo centro gilda', src: './assets/works/eventos-estructuras/vallas-nuevo-centro-gilda-88-2_o.jpg' },
    { title: 'Vallas nuevo centro', src: './assets/works/eventos-estructuras/vallas-nuevo-centro-89-2_o.jpg' },
    { title: 'Vallas rivera', src: './assets/works/eventos-estructuras/vallas-rivera-90-2_o.jpg' },
    { title: 'Vallas rivera', src: './assets/works/eventos-estructuras/vallas-rivera-2-91-2_o.jpg' },
    { title: 'Vallas rivera', src: './assets/works/eventos-estructuras/vallas-rivera-3-92-2_o.jpg' }
]

const estructurasWorks = [
    { title: 'Andamios multi', src: './assets/works/eventos-estructuras/andamios-multi-76-2_o.jpg' },
    { title: 'Escenario canteras', src: './assets/works/eventos-estructuras/escenario-canteras-77-2_o.jpg' },
    { title: 'Escenario temático', src: './assets/works/eventos-estructuras/escenario-tema-tico-78-2_o.jpg' },
    { title: 'Free standing', src: './assets/works/eventos-estructuras/free-standing-79-2_o.jpg' },
    { title: 'Gradas sagrada familia', src: './assets/works/eventos-estructuras/gradas-sagrada-familia-80-2_o.jpg' },
    { title: 'Gradas san josé la providencia', src: './assets/works/eventos-estructuras/gradas-san-jose-la-providencia-81-2_o.jpg' },
    { title: 'Gradas unit', src: './assets/works/eventos-estructuras/gradas-unit-82-2_o.jpg' },
    { title: 'Grupo abc carteleria', src: './assets/works/eventos-estructuras/grupo-abc-carteleria-83-2_o.jpg' },
    { title: 'Mangrullo', src: './assets/works/eventos-estructuras/mangrullo-84-2_o.jpg' },
    { title: 'Montaje cuctsa', src: './assets/works/eventos-estructuras/montaje-cuctsa-85-2_o.jpg' },
    { title: 'Pantalla led teatro verano', src: './assets/works/eventos-estructuras/pantalla-led-teatro-verano-86-2_o.jpg' },
    { title: 'Vallas', src: './assets/works/eventos-estructuras/vallas-87-2_o.jpg' },
    { title: 'Vallas nuevo centro gilda', src: './assets/works/eventos-estructuras/vallas-nuevo-centro-gilda-88-2_o.jpg' },
    { title: 'Vallas nuevo centro', src: './assets/works/eventos-estructuras/vallas-nuevo-centro-89-2_o.jpg' },
    { title: 'Vallas rivera', src: './assets/works/eventos-estructuras/vallas-rivera-90-2_o.jpg' },
    { title: 'Vallas rivera', src: './assets/works/eventos-estructuras/vallas-rivera-2-91-2_o.jpg' },
    { title: 'Vallas rivera', src: './assets/works/eventos-estructuras/vallas-rivera-3-92-2_o.jpg' }
]

const marketingWorks = [
    { title: 'Stickers', src: './assets/works/marketing/stickers-74-4_o.jpg' },
    { title: 'Serigrafía', src: './assets/works/marketing/serigrafia-73-3_o.jpg' },
    { title: 'Lonas impresas DF', src: './assets/works/marketing/lponas-impresas-df-72-3_o.jpg' },
    { title: 'Impresión en trovicel', src: './assets/works/marketing/impresion-en-trovicel-71-3_o.png' },
    { title: 'Cartelería', src: './assets/works/marketing/carteleria-70-3_o.jpg' },
    { title: 'Bordados', src: './assets/works/marketing/bordados-69-2_o.png' }
]

const d = document,
    $container = d.querySelector('.last-works-wrapper'),
    $fragment = d.createDocumentFragment(),
    $imgModal = d.getElementById('image-modal'),
    $imgModalWrapper = d.getElementById('image-wrapper'),
    $closeIcon = d.querySelector('.close-icon')

const renderWorks = (page) => {
    if (page === 'eventos') {
        getFiles(eventosWorks)
    } else if (page === 'estructuras') {
        getFiles(estructurasWorks)
    } else if (page === 'marketing') {
        getFiles(marketingWorks)
    } else {
        console.log('No hay trabajos para renderizar en esta página')
    }
}

const getFiles = (workType) => {
    workType.forEach(el => {
        const $itemContainer = d.createElement('div'),
            $hiddenContentContainer = d.createElement('div'),
            $img = d.createElement('img'),
            $title = d.createElement('h3'),
            $searchIcon = d.createElement('i')
        $itemContainer.classList.add('item')
        $hiddenContentContainer.classList.add('hidden-content')
        $searchIcon.classList.add('fa-solid', 'fa-magnifying-glass')
        $searchIcon.setAttribute('clickedImg', el.src)
        $searchIcon.setAttribute('id', 'searchIcon')
        $img.setAttribute('src', el.src)
        $img.setAttribute('alt', el.title)
        $title.innerText = el.title
        $hiddenContentContainer.appendChild($searchIcon)
        $hiddenContentContainer.appendChild($title)
        $itemContainer.appendChild($hiddenContentContainer)
        $itemContainer.appendChild($img)
        $fragment.appendChild($itemContainer)
    })
    $container.appendChild($fragment)
}

const handleClick = (e) => {
    if (e.target.getAttribute('id') !== 'searchIcon') return
    $imgModal.classList.remove('d-none')
    const $modalImg = d.createElement('img')
    $modalImg.setAttribute('src', e.target.getAttribute('clickedImg'))
    $modalImg.classList.add('modal-img')
    $imgModalWrapper.appendChild($modalImg)
    d.body.classList.add('overflow-h') 
}

d.addEventListener('click', e => handleClick(e))

$closeIcon.addEventListener('click', () => {
    $imgModal.classList.add('d-none')
    d.querySelector('.modal-img').remove()
    d.body.classList.remove('overflow-h')
})