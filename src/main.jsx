import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Layout
import ClienteRoot from "./routes/ClienteRoot";
import RistoranteRoot from "./routes/RistoranteRoot";
import ErrorPage from "./error-page";

// Clienti
import Home from "./Component/Clienti/Home";
import Album from "./Component/Clienti/Album";
import Pacchetti from "./Component/Clienti/Pacchetti";
import LogIn from "./Component/Clienti/LogIn";

// Ristorante (aggiungi questi file!)
import RistoranteDashboard from "./Component/Ristorante/Dashboard";
import RistoranteOrdini from "./Component/Ristorante/Ordini";
import RistoranteMenu from "./Component/Ristorante/Menu";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ClienteRoot />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "Album", element: <Album /> },
      { path: "Pacchetti", element: <Pacchetti /> },
      { path: "Accedi", element: <LogIn /> },
    ],
  },
  {
    path: "/ristorante",
    element: <RistoranteRoot />,
    children: [
      { index: true, element: <RistoranteDashboard /> },
      { path: "ordini", element: <RistoranteOrdini /> },
      { path: "menu", element: <RistoranteMenu /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

