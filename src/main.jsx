import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Profile from './profile.jsx'
import Login from './Login.jsx'
import { Provider } from 'react-redux'
import Appstore from './utils/appstore.jsx'
import Body from './Body.jsx'


        const applayout=createBrowserRouter([
        {
          path:'/',
          element:<Login/>,
        
        children:[
              {
                path:'/profile',
                element:<Profile/>
              },
  
        ]
        },
       {
          path:'/feed',
          element:<Body/>
        }
     
        ])

createRoot(document.getElementById('root')).render(
  <Provider store={Appstore}>
    <RouterProvider router={applayout}/> 
    </Provider>
)


