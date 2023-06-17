import React from "react";
import ReactDOM from "react-dom/client";
import AOS from "aos";
import "aos/dist/aos.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./styles/index.css";

AOS.init({
  duration: "1500",
  once: false,
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    index: true,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
