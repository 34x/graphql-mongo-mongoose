import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "@/components/layout";
import Items from "@/components/items";

const ErrorPage = () => {
  return <div>404!</div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <Items slug="vegetables" />
      </Layout>
    ),

    errorElement: (
      <Layout>
        <ErrorPage />
      </Layout>
    ),
  },
  {
    path: "/vegetables",
    element: (
      <Layout>
        <Items slug="vegetables" />
      </Layout>
    ),
  },
  {
    path: "/fruits",
    element: (
      <Layout>
        <Items slug="fruits" />
      </Layout>
    ),
  },
  {
    path: "/cheese",
    element: (
      <Layout>
        <Items slug="cheese" />
      </Layout>
    ),
  },
]);

export default () => (
  <RouterProvider router={router} ErrorBoundary={() => {}} />
);
