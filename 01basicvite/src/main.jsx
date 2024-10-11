import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//when app is a function so we can create onw functions 
//lets create and render it
function MyApp() {
  return (
    <h1>
      hello Vite
    </h1>
  )
}

//now lets create another elements with react
const reactElement = React.createElement(
  'a', {
  href: 'https://v3.vitejs.dev/guide/',
  target: '_blank',
},
  'Goto Vite Doc',
);

//another way to creating element easy and simple
const anotherreactEle = (
  <a href='www.google.com'>Goto google</a>
)


createRoot(document.getElementById('root')).render(
  //if your create variable simply used it name to render elements
  //  reactElement
 // anotherreactEle

 // you can also call functions
 //<MyApp/>
 <App/>



)
