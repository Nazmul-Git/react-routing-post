import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home/Home.jsx';
import FrontPage from './Components/FrontPage/FrontPage.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Products from './Components/Products/Products';
import PostDetails from './Components/PostDetails/PostDetails';

const router=createBrowserRouter([
  {
    path:'/',
    element: <Home></Home>,
    children:[
      {
        path:'/',
        element:<FrontPage></FrontPage>,
        errorElement:<ErrorPage></ErrorPage>
      },
      {
        path:'/products',
        element:<Products></Products>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/post/:postId',
        element:<PostDetails></PostDetails>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
      {
        path:'/about',
        element:<About></About>,
        errorElement:<ErrorPage></ErrorPage>
      },
      {
        path:'/contact',
        element:<Contact></Contact>,
        errorElement:<ErrorPage></ErrorPage>
      }

    ]
  }
  
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
