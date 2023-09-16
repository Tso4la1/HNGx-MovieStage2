import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home, MovieDetails } from './components/pages';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
]);

function App() {

  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App
