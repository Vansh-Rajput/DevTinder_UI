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
import Privacy from './utils/Privacy.jsx'
import Cancellation from './utils/Cancellation.jsx'
import Shipping from './utils/Shipping.jsx'
import Terms from './utils/Terms.jsx'
import Contact from './utils/Contact.jsx'
import Premium from './Premium.jsx'

        const applayout=createBrowserRouter([
        {
          path:'/',
          element:<Login/>,
  
        },
        {
          path:'/Privacy',
          element:<Privacy/>,
  
        },
        {
          path:'/Cancellation',
          element:<Cancellation/>,
  
        },
        {
          path:'/Shipping',
          element:<Shipping/>,
  
        },
        {
          path:'/Terms',
          element:<Terms/>,
  
        },
         {
          path:'/Contact',
          element:<Contact/>,
  
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
              },
                 {
                path:'premium',
                element:<Premium/>
              },
  
        ]
        }
     
        ])

createRoot(document.getElementById('root')).render(
  <Provider store={Appstore}>
    <RouterProvider router={applayout}/> 
    </Provider>
)


