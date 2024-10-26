import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Layout from './Layout.jsx'
import User from './Users/User.jsx'
import Githubinfo, {getGithubInfo} from './components/Github/Githubinfo.jsx'

// First way to creating Routing

{/*const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "",
          element: <Home />
        },
        {
          path: "about",
          element: <About />
        },
        {
          path: "contact",
          element: <Contact />
        }
      ]
    }
  ])
*/}

// second way to create routing of pages
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='user/:userid' element={<User/>}/>
      <Route 
      loader={getGithubInfo}
      path='github' 
      element={<Githubinfo/>}/>      
    </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
