import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Profile from './profile.jsx'
import Navbar from './utils/Navbar.jsx'
import Footer from './utils/Footer.jsx'

const Main=()=>{
    return(
        <div>
        <Navbar/>
        <Outlet/>
        <Footer/>
        </div>
    )
}
    
        const applayout=createBrowserRouter([
        {
          path:'/',
          element:<Main/>,
        
        children:[
              {
                path:'/profile',
                element:<Profile/>
              }
        ]

        }
        ])

createRoot(document.getElementById('root')).render(
    <RouterProvider router={applayout}/> 
)


