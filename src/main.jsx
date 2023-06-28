import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="min-w-full h-full mx-auto px-3 lg:px-0">
      <RouterProvider router={router}></RouterProvider>
    </div>
  </React.StrictMode>
);
