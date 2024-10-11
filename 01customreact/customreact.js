
function customRender(reactElements, container){
    const domEle = document.createElement(reactElements.type)
    domEle.innerHTML = reactElements.children;
    domEle.setAttribute('href', reactElements.props.href);
    // container.appendChild(domEle)
    container.appendChild(domEle);
}
const reactElements = {
    type:'a',
    props:{
        href:'www.google.com',
        target:'_blank',
    },
    children: 'Goto Google',
}
const mainContainer = document.querySelector('#root')

customRender(reactElements, mainContainer)