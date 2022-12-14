import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Login } from "./Login";
import { RegisForm } from "./RegisForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Login />
    ),
  },
  {
    path: "registration",
    element: (
      <RegisForm />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);