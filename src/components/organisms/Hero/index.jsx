// src/components/HomePage.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavBar } from '../NavBar';
import IMOB from "./../../../assets/Big-IMOB.png";
import cherry from "./../../../assets/Big-Cherry.png";
import "./index.scss";
import Play from "./../../../assets/Play1.png";


export const Hero = () => {
    const [movies, setMovies] = useState([]);
    const [backgroundMovie, setBackgroundMovie] = useState(null);

    useEffect(() => {
        const fetchMovies = async () => {
            try {
                const apiKey = '3585d13423178a68e949e9450ad65878';
                const response = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&sort_by=popularity.desc&language=en-US&page=1`
                );

                const randomMovies = response.data.results.slice(0, 10);
                setMovies(randomMovies);

                // Choose a random movie to set as the background
                const randomMovie = randomMovies[Math.floor(Math.random() * randomMovies.length)];
                setBackgroundMovie(randomMovie);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchMovies();
    }, []);

    return (
        <div className="home-page">
            <div
                className="background-image"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${backgroundMovie?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '90vh',
                }}
            >
                <NavBar />
                {backgroundMovie && (
                    <div className='hero-details pt-44 mx-24'>
                        <div className="background-movie-details w-2/5">
                            <h2 className='text-5xl'>{backgroundMovie.title}</h2>
                            <div className="flex my-3 text-xs items-center ">
                                <div className="flex items-center my-5">
                                    <img src={IMOB} alt="IMOB" className='w-20' />
                                    <span className="ml-6 text-lg">{backgroundMovie.vote_average * 10}.0/ 100</span>
                                </div>
                                <div className="flex ml-16 items-center">
                                    <img src={cherry} alt="Cherry" className="mr-2 w-9 text-lg" />
                                    <span className='text-lg'>{backgroundMovie.vote_average * 100 / 10}%</span>
                                </div>
                            </div>
                            <p className='text-xl'>{backgroundMovie.overview}</p>
                            <div className='flex items-center my-5'>
                                <a className=' flex items-center play-btn text-white text-xl bg-[#BE123C]'>
                                    <img src={Play} className='play-btn-img' />
                                    WATCH TRAILLER
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

