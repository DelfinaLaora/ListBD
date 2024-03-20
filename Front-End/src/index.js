import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './sass/style.scss'
import Root from './main/Root/Root'
import reportWebVitals from './reportWebVitals'
import Error from './main/Error/Error'

import Home from './main/Home/Home'
import Albums from './main/Albums/Albums'
const router = createBrowserRouter([
   {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      // Enfant de la route racine
      children: [
         {
            // Lorsqu'une erreur est générée dans les routes enfants,
            // erroElement la détectera et la restituera,
            // préservant l'interface utilisateur de "root" !
            errorElement: <Error />,
            // "index" indique au routeur de faire correspondre et de restituer
            // cette route lorsque l'utilisateur se trouve sur le chemin exact de la
            // route parent, il n'y a donc aucune autre route enfant à restituer dans
            // le fichier <Outlet>.
            children: [
               { index: true, element: <Home /> },

               {
                  path: '/albums',
                  element: <Albums />,
               },
               // {
               //    path: "/collection",
               //    element: <Collection />,
               //  },
               //  {
               //    path: "/album_item",
               //    element: <AlbumItem />,
               //  },
               {
                  path: '*',
                  element: <Error />,
               },
            ],
         },
      ],
   },
])

ReactDOM.createRoot(document.getElementById('root')).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
