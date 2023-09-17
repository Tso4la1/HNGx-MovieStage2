import React, { useEffect } from "react"
import { imageBaseCard } from "../../../utils/imageBase"
import imdb from '../../../assets/imdb.png'
import { useNavigate } from "react-router-dom"
export const MovieCard = ({ movie }) => {
    const { id, poster_path, title, vote_average, overview, release_date } = movie
    const navigate = useNavigate()

    useEffect(() => { }, [])

    const goToDetails = () => {
        navigate(`/movies/${id}`)
    }

    return (
        <div
            data-testid="movie-card"
            onClick={goToDetails}
            key={id}
            className=' w-full md:w-1/5 min-h-[300px] mx-auto space-y-4 cursor-pointer group transition-transform'
        >
            <div className='w-full flex items-center justify-center group-hover:scale-95 transition-transform'>
                <img
                    src={`${imageBaseCard}${poster_path}`}
                    alt={overview}
                    className='rounded w-full'
                    data-testid="movie-poster"
                />
            </div>
            <div>
                <p className="text-black/50 text-sm" data-testid="movie-release-date">{release_date}</p>
            </div>
            <div className="space-y-2">
                <h3 className="font-medium text-xl" data-testid="movie-title">{title}</h3>
                <div>
                    <div className="flex items-center gap-x-2">
                        <img
                            src={imdb}
                            alt='imdb logo'
                            className="w-14"
                        />
                        <p className="text-lg font-normal">{vote_average.toFixed(1)} / 10</p>
                    </div>
                    <div></div>
                </div>
                <div></div>
            </div>
        </div>
    )
}
