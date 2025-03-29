import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";

//Import da Component
import Pacchetti from "./Component/Pacchetti";
import Album from "./Component/Album";
import LogIn from "./Component/LogIn";
import Home from "./Component/Home";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
        {
          index: true,
          path: "Home",
          element: <Home />,
        },
        {
          path: "Album",
          element: <Album />,
        },
        {
          path: "Pacchetti",
          element: <Pacchetti />,
        },
        {
          path: "Accedi",
          element: <LogIn />,
        },
        
      ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
