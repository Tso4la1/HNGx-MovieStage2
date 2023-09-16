import React from 'react';

export const SearchResults = ({ results }) => {
    return (
        <div className="movie-search-results">
            {results.map((movie) => (
                <Link
                    key={movie.id}
                    to={`/${movie.id}`}
                    className="movie-search-result"

                >
                    <img src={movie.poster} alt={movie.title} />
                    <h2>{movie.title}</h2>
                    <p>{movie.releaseDate}</p>
                </Link>
            ))}
        </div>
    );
};
