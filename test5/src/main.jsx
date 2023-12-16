import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom'
import BlogPage from './pages/BlogPage.jsx'
import AboutUs from './pages/AboutUs.jsx'
import ContactUs from './pages/ContactUs.jsx'

const router= createBrowserRouter([
  {path:'/', element: <App />},
  {path:'/blog', element: <BlogPage/>},
  {path:'/about', element: <AboutUs/>},
  {path:'/contact', element: <ContactUs/>}
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
