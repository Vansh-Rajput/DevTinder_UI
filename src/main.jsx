import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, Outlet } from 'react-router-dom'
import { RouterProvider } from 'react-router-dom'
import Profile from './profile.jsx'
import Login from './Login.jsx'
import { Provider } from 'react-redux'
import Appstore from './utils/appstore.jsx'
import Body from './Body.jsx'
import Feed from './Feed.jsx'
import Connections from './Connections.jsx'
import Requests from './Requests.jsx'
import Chat from './Chat.jsx'

        const applayout=createBrowserRouter([
        {
          path:'/',
          element:<Login/>,
  
        },
       {
          path:'/main',
          element:<Body/>,
        children:[
              {
                path:'profile',
                element:<Profile/>
              },
              {
                path:'',
                element: <Feed/>
              },
               {
                path:'connections',
                element: <Connections/>
              },
               {
                path:'requests',
                element: <Requests/>
              },
                {
                path:'chat/:toId',
                element: <Chat/>
              }
  
        ]
        }
     
        ])

createRoot(document.getElementById('root')).render(
  <Provider store={Appstore}>
    <RouterProvider router={applayout}/> 
    </Provider>
)


