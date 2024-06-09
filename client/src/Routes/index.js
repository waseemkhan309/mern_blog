// import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import FormAuth from "../Pages/Auth/FormAuth";
import Editor from "../Pages/Editor";
import PrivateRoute from "./PrivateRoute";
import RedirectRoute from "./RedirectRoute";

export default createBrowserRouter([
    {
        path: '/',
        element: (<PrivateRoute> <MainLayout /> </PrivateRoute>),
        children: [
            {
                path: '/signin',
                element: <FormAuth type={"Sign-in"} />
            },
            {
                path: '/signup',
                element: <FormAuth type={"Sign-up"} />
            }
        ]
    },
    {
        path: '/editor',
        element: (<RedirectRoute><Editor /></RedirectRoute>)
    }
])