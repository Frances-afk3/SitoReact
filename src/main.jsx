import * as React from "react";
import * as ReactDOM from "react-dom/client";
import Root from "./routes/root";
import ErrorPage from "./error-page";

//Import da Component
import Pacchetti from "./Component/Pacchetti";
import Album from "./Component/Album";
import LogIn from "./Component/LogIn";


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    //errorElement: <ErrorPage />,
    children: [
        {
          path: "Album", // Aggiungi la rotta per il componente Album
          element: <Album />,
        },
        {
          path: "Pacchetti", // Aggiungi la rotta per il componente Card
          element: <Pacchetti />, // Se desideri aggiungere Card come una nuova pagina
        },
        {
            path: "Accedi", // Aggiungi la rotta per il componente Card
            element: <LogIn />, // Se desideri aggiungere Card come una nuova pagina
          },
      ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
