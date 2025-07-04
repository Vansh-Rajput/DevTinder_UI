import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Profile from './profile.jsx'
import Navbar from './utils/Navbar.jsx'
import Footer from './utils/Footer.jsx'
import Login from './Login.jsx'
import { Provider } from 'react-redux'
import Appstore from './utils/appstore.jsx'


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
              },
  
        ]
        },
       {
          path:'/login',
          element:<Login/>
        }
     
        ])

createRoot(document.getElementById('root')).render(
  <Provider store={Appstore}>
    <RouterProvider router={applayout}/> 
    </Provider>
)


