import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import SecondPage from "./SecondPage";
import NewsPage from "./News";
import { createBrowserRouter, RouterProvider } from "react-router";

let router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    // loader: loadRootData,
  },
  {
    path: "/second",
    Component: SecondPage,
  },

  {
    path: "news/:id/:username/:phone",
    Component: NewsPage,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App/> */}
  </React.StrictMode>
);
