import React from 'react';
import './index.css';
import { Home } from '../src/Components/Pages/Home';
import { MovieDetails } from '../src/Components/Pages/MovieDetails';
import { PageNotFound } from '../src/Components/Pages/PageNotFound';
import { SearchResults } from '../src/Components/Pages/SearcResults';
// import { Homepage } from './Components/Pages'
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
// import { RootErrorPage } from "./Components/Organisms"
// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Homepage />,
//     errorElement: <RootErrorPage />,

//   },
// ]);

// function App() {
//   return (
//     <>
//       <RouterProvider router={router} />
//     </>
//   )
const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <PageNotFound />
  },
  {
    path: '/movies/:movieID',
    element: <MovieDetails />,

  },
  {
    path: '/search',
    element: <SearchResults />
  }

])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
