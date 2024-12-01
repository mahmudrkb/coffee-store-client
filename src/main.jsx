import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Signin from "./components/Signin.jsx";
import Signup from "./components/Signup.jsx";
import Main from "./components/Main.jsx";
import AuthProvider from "./providers/AuthProvider.jsx";
import Users from "./components/Users.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,

    children: [
      {
        path: "/",
        element: <App></App>,
        loader: () =>
          fetch("https://coffee-server-gamma-three.vercel.app/coffee"),
      },
      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-server-gamma-three.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "/signin",
        element: <Signin></Signin>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      {
        path: "/users",
        element: <Users></Users>,
        loader: () =>
          fetch("https://coffee-server-gamma-three.vercel.app/users"),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
