// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import MainLayout from "../Layout/MainLayout";
import FormAuth from "../Pages/Auth/FormAuth";

export default createBrowserRouter([
    {
        path:'/',
        element:<MainLayout/>,
        children:[
            {
                path:'/signin',
                element:<FormAuth  type={"Sign-in"}/>
            },
            {
                path:'/signup',
                element:<FormAuth type={"Sign-up"}/>
            }
        ]
    }
])