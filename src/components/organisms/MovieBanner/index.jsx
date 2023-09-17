import React, { useContext, useEffect } from "react"

import imdb from '../../../assets/imdb.png'
import { imageBase, imageBaseCard } from "../../../utils/imageBase"
import { useNavigate } from "react-router-dom"
import { Context } from "../../../context/ContextProvider"

export const MovieBanner = ({ movie }) => {
    const { id, poster_path, backdrop_path, title, overview, vote_average } = movie
    // console.log(id)
    const navigate = useNavigate()

    const { deviceWidth } = useContext(Context)

    const watchTrailer = () => {
        navigate(`/movies/${id}`)
    }

    return (
        <div
            key={id}
            className='absolute text-sm top-0 left-0 w-full h-full bg-red-500 text-white'
        >
            <img
                src={`${deviceWidth > 500 ? imageBase : imageBaseCard}${poster_path}`}
                alt={overview}
                className='w-full h-full absolute top-0 left-0 object-center object-cover'
            />

            <div className=' w-[90%] md:w-2/5 absolute top-[15%] md:top-1/4 -translte-y-1/2 left-4 md:left-10 space-y-2 md:space-y-4'>
                <div className="space-y-4">
                    <h1 className="text-7xl md:text-7xl text-white font-bold ">{title}</h1>
                    <div className="flex items-center gap-x-4">
                        <img src={imdb} alt="imdb logo" />
                        <p className="text-lg font-medium">{vote_average} / 10</p>
                    </div>
                </div>
                <p className="font-medium">{overview}</p>
                <div onClick={watchTrailer} className="bg-site-red transition-colors hover:bg-white cursor-pointer hover:text-site-red w-fit text-white font-medium flex items-center gap-x-2 py-2 px-4 rounded">
                    <span>Watch Trailer</span>
                </div>
            </div>
        </div>
    )
}