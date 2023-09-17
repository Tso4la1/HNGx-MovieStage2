import React from 'react';
import { useState, useEffect } from 'react';
import { Icons, Images, Text } from '../../Atoms';
import imdb from '../../../assets/imdb.png';
import cherry from '../../../assets/PngItem.png';
import chevron from '../../../assets/chevron.png'

export const MovieGallery = () => {
    const [movies, setMovies] = useState([]);

    const countryAbbreviations = {
        "United States of America": "USA",
        "United Kingdom": "UK",
        "Nigeria": "NG",
        "China": "CHN",
        "Japan": "JP"
    };



    useEffect(() => {

        const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc1Mjk1ZmZhN2EwMjUyMDJiNzY4NWNjZmI2ODJlZCIsInN1YiI6IjY0OTc3YWEzZWI3OWMyMDBjNTZkN2U3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._rwpgQieG4YP9E1Ot9sCUpHbTYuwlOutM16VUbx8qDQ'
            }
        };



        fetch(url, options)
            .then((response) => response.json())
            .then((json) => {
                const movieDetailsPromises = json.results.slice(0, 12).map((movie) => {
                    const movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}?language=en-US`;
                    const movieOptions = {
                        method: "GET",
                        headers: {
                            accept: "application/json",
                            Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIzNTg1ZDEzNDIzMTc4YTY4ZTk0OWU5NDUwYWQ2NTg3OCIsInN1YiI6IjY0OTc2MDA3OTU1YzY1MDBhYzg4ZjRkOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.I3905bVsCWrmqEIxaGU6uV6zLfPC8Yhsxk8s_aDpugA",
                        },
                    };

                    return fetch(movieUrl, movieOptions)
                        .then((response) => response.json())
                        .then((movieDetails) => ({
                            ...movie,
                            genres: movieDetails.genres.map((genre) => genre.name),
                            productionCountries: movieDetails.production_countries.map(
                                (country) => { return countryAbbreviations[country.name] || country.name; }
                            ),
                            productionYear: new Date(movieDetails.release_date).getFullYear(),
                            voteAverage: Math.ceil(movieDetails.vote_average * 10),
                            releaseDate: movieDetails.release_date,
                        }));
                });

                Promise.all(movieDetailsPromises)
                    .then((moviesWithDetails) => setMovies(moviesWithDetails))
                    .catch((error) => console.log(error));
            })
            .catch((error) => console.log(error));
    }, []);


    return (
        <>
            <div className="text-black mx-[89px] flex justify-between items-center pt-16">
                <h2 className="text-2xl font-bold">Featured Movie</h2>
                <div className="text-[#BE123C] flex justify between items-center">
                    <Text type='p' text='See more' />
                    <Images className="ml-2" name="image" src={chevron} alt="chevron" />
                </div>
            </div>
            <div className="flex gap-x-8 mx-[69px] max-[500px]:mx-0 max-[768px]:mx-0 max-[980px]:mx-10">
                <div className="w-full p-2 overflow-x-auto">
                    <ol className="grid grid-cols-4 max-[980px]:grid-cols-3 max-[768px]:grid-cols-2 max-[500px]:grid-cols-1 gap-6 max-[982px]:gap-2 ">
                        {movies.map((movie) => (
                            <div key={movie.id} data-testid="movie-card">
                                <li className="p-4 text-white">
                                    <div className="movie-box">
                                        <Icons name="favourite" className="float-right relative top-12 mr-5" />
                                        <img
                                            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                                            alt={movie.title}
                                            data-testid="movie-poster" />
                                    </div>
                                    <div key={movie.id} className="card-main text-black">
                                        <p className="my-3 text-sm text-grey font-medium">{movie.productionCountries.join(", ")} - {movie.productionYear}</p>
                                        <Text className="text-xl text-black font-semibold" data-testid="movie-title" type="p" text={movie.title} />
                                        <div className="flex my-3 text-xs justify-between items-center">
                                            <div className="flex items-center">
                                                <img src={imdb} alt="IMOB" />
                                                <span className="ml-2">{movie.voteAverage}.0 / 100</span>
                                            </div>
                                            <div className="flex mr-6 items-center">
                                                <img src={cherry} alt="Cherry" className="mr-2" />
                                                <span>{movie.voteAverage}%</span>
                                            </div>
                                        </div>
                                        <Text className="text-sm text-grey font-medium" type="p" text={movie.genres.join(", ")} />

                                    </div>
                                </li>
                            </div>
                        ))}
                    </ol>
                </div>
            </div>
        </>
    );
};