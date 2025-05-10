import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.scss';

// Componentes
import Layout from "./pages/Layout";
import Home from './pages/Home';
import Projetos from "./pages/Projetos";

export default function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "projetos",
          element: <Projetos />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />
}