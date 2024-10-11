import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//when app is a function so we can create onw functions 
//lets create and render it

function MyApp() {
  <div><h1>this is custom app</h1></div>
}


createRoot(document.getElementById('root')).render(
  <>
    <App />
    <MyApp />
  </>



)
