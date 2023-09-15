import React from "react";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Home, SearchPage } from './components/pages';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search",
    element: <SearchPage />,
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
