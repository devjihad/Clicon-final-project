import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Products from '../Home/Product/AllProduct/Products';
import Home from '../Home/Home';
import Parent from './Parent';
import Login from '../LoginCreadintial/Login';
import Singin from '../LoginCreadintial/Signin';



const Routerr = () => {
   const router =createBrowserRouter([
        {
            path:'/',
            element:<Parent/>,
            children:[
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/product',
                    element:<Products/>
                },
                {
                    path:'/login',
                    element:<Login/>
                },
                {
                    path:'/signup',
                    element:<Singin/>
                }
                // {
                //     path:'/:_id',
                //     loader:({params})=>fetch(`${product}${params._id}`),
                //     element:<ProductPage></ProductPage>
                // }
               
            ]
        }
    ])
    return (
        <div>
            <RouterProvider router={router}></RouterProvider>
        </div>
    );
};

export default Routerr;