# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Movie Application
This application provides comprehensive database of movies from different genres and regions. It provides users with detailed information about movies and allows them to watch movie trailers. With this app, users can explore a wide range of movies and find the ones that best suit their interests.

## Features
Search for favourite movies
Shows trending movies in the Home Page
## View trailers
Steps to Access the App
Fork, download or clone this repository in your local device.
Open your CMD/Terminal, navigate to the parent folder.

In the parent folder install the packages used in this app, run npm install, npm install -D tailwindcss postcss autoprefixer, npx tailwindcss init -p, npm install sass.
Then, the successfully access the app, run npm run dev.
Visit http://127.0.0.1:5173/
Live link
[AppVidoes](https://superlative-sunflower-4f42b2.netlify.app/)

This code Was built using a React Vite frame work and SCSS along side with tailwind CSS
The API is consumed from The Movie Data Base (TMDB)
The page Components are in a Components folder
Here I placed the Atoms, Molecules, Organisms and pages folders
Each of these folders hold a functionality
Like the Movie card folder holds the movie list called by Fetch hook and arranged using the map function that is re-rendered using the useState hook
The Navbar and the Hero folder are used for the search and the display of the movie header
The movieDetails is used for displaying the movies searched
