// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home";

export default createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            }
        ]
    },
    {
        path:'/signup',
        element:<SignUp/>
    }
])