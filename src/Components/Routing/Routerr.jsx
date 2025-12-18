import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router';

import Products from '../Home/Product/AllProduct/Products';
import Home from '../Home/Home';
import Parent from './Parent';



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