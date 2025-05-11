import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import './App.scss';

// Componentes
import Layout from "./pages/Layout";
import Characters from "./pages/Characters";
import CharacterInfo from "./pages/CharacterInfo";

export default function App() {

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
        retry: false,
        staleTime: 5 * 60 * 1000,
      },
    },
  });

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "characters",
          element: <Characters />,
        },
        {
          path: "characters/:id",
          element: <CharacterInfo />,
        },
        {
          path: "locations",
          element: <div>Locais</div>,
        },
        {
          path: "episodes",
          element: <div>episodios</div>,
        },
      ],
    },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}