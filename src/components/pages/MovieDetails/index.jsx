import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const apiUrl = 'https://api.themoviedb.org/3';
const apiKey = import.meta.env.VITE_API_KEY;



export const MovieDetails = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const response = await fetch(
                    `${apiUrl}/movie/${id}?api_key=${apiKey}`
                );
                const data = await response.json();
                setMovie(data);


                const trailerVideoUrl = await fetchTrailerVideoUrl(data.title);
                setTrailerUrl(trailerVideoUrl);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div text-black>Loading...</div>;
    }

    return (
        <div className="movie-details text-black">

            {trailerUrl && (
                <div className="trailer-video">
                    <iframe
                        width="560"
                        height="315"
                        src={trailerUrl}
                        title={`Trailer for ${movie.title}`}
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            )}



            <h1>{movie.title}</h1>
            <p>{movie.release_date}</p>
            <p>{movie.overview}</p>
        </div>
    );
};
