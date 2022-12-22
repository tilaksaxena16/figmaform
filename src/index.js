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
import { Form } from "./Practiseform/Form";
import { Numincdec } from "./project/Numincdec";


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
  {
    path: "form",
    element: (
      <Form />
    ),
  },
  {
    path: "num",
    element: (
      <Numincdec />
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);