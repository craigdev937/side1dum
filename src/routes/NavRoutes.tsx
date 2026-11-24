import React from "react";
import { createBrowserRouter, 
    RouterProvider } from "react-router";
import { NotFound } from "../components/NotFound";
import { Sidebar } from "./Sidebar";
import { Home } from "../pages/home/Home";
import { Comments } from "../pages/comments/Comments";
import { Users } from "../pages/users/Users";
import { Posts } from "../pages/posts/Posts";
import { Products } from "../pages/prod/Products";
import { Quotes } from "../pages/quotes/Quotes";
import { Recipes } from "../pages/recipes/Recipes";
import { RDetail } from "../pages/recipes/RDetail";

const RouteList = createBrowserRouter([
    {
        path: "/",
        element: <Sidebar />,
        errorElement: <NotFound />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/comments",
                element: <Comments />
            },
            {
                path: "/products",
                element: <Products />
            },
            {
                path: "/posts",
                element: <Posts />
            },
            {
                path: "/quotes",
                element: <Quotes />
            },
            {
                path: "/users",
                element: <Users />
            },
            {
                path: "/recipes",
                element: <Recipes />
            },
            {
                path: "/recipes/:id",
                element: <RDetail />
            }
        ]
    }
], { basename: "/side1dum" });

export const NavRoutes = () => {
    return (
        <React.Fragment>
            <RouterProvider router={RouteList} />
        </React.Fragment>
    );
};



