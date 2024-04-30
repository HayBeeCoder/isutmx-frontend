import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import { Dashboard, Signin } from "./pages/index.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Hello World</h1>
        <Link to="about">About Us</Link>
        <Link to="signin">Signin</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <App />,
  },
  {
    path: "signin",
    element: <Signin />,
  },
  {
    path: "dashboard",
    element: <Dashboard />,
  },
]);

{/* <Route path="/dashboard" component={Dashboard} />; */}
createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// ReactDOM.createRoot(document.getElementById('root')).render(
//     <App />
// )
