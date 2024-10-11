
function customRender(reactElements, container) {
    const domEle = document.createElement(reactElements.type)
    domEle.innerHTML = reactElements.children;
    domEle.setAttribute('href', reactElements.props.href);
    // container.appendChild(domEle)
    container.appendChild(domEle);
}
const reactElements = {
    type: 'a',
    props: {
        href: 'www.google.com',
        target: '_blank',
    },
    children: 'Goto Google',
}

//lets create another elements 
const anotherElement = {
    type: 'img',
    props: {
        width: '500px',
        src: 'https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg',
        alt: 'Error to img load'
    }
}
function imageRender(anotherElement, container) {
    const imgDom = document.createElement(anotherElement.type)
    imgDom.setAttribute('src', anotherElement.props.src)
    imgDom.setAttribute('width', anotherElement.props.width)
    container.appendChild(imgDom)
}
const mainContainer = document.querySelector('#root')

customRender(reactElements, mainContainer)
imageRender(anotherElement, mainContainer)