import React, { useContext, useEffect, useState } from "react"

import { client } from "../../../utils/axios"

import YouTube from "react-youtube"
import { Context } from "../../../../src/context/ContextProvider"

export const MovieInfo = ({ details }) => {
    const { id, title, runtime, release_date, vote_average, overview, genres } = details

    const [movieTrailer, setMovieTrailer] = useState({})
    const [isLoading, setIsLoading] = useState(true)
    const [cast, setCast] = useState([])
    const [writers, setWriters] = useState([])
    const [director, setDirector] = useState([])
    const [stars, setStars] = useState([])
    const [castLoading, setCastLoading] = useState(true)


    const { deviceWidth } = useContext(Context)

    useEffect(() => {
        setIsLoading(true)
        client
            .get(`${id}/videos`)
            .then((res) => {
                const videoDetails = res.data.results[0]

                setMovieTrailer(videoDetails)
                setIsLoading(false)

            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    useEffect(() => {
        setCastLoading(true)
        client
            .get(`${id}/credits`)
            .then((res) => {

                const { cast, crew } = res.data

                setStars(cast.slice(0, 3))

                const directors = crew
                    .filter((c) => {
                        return c.department === "Directing"
                    })
                    .slice(0, 3)
                setDirector(directors)
                const writers = crew
                    .filter((c) => {
                        return c.department === "Writing"
                    })
                    .slice(0, 3)
                setWriters(writers)
                setCastLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])



    const opts = {
        height: "390",
        width: (0.8 * deviceWidth),
        playerVars: {
            autoplay: 1,
        },
    }
    return (
        <div className='w-[95%] mx-auto md:w-4/5 space-y-8'>
            <div className='w-full min-h-[200px] bg-red-500/0'>
                {isLoading ? (
                    <div className='flex items-center justify-center w-full h-full'>

                    </div>
                ) : (
                    <div className='w-fit mx-auto'>
                        <YouTube
                            videoId={movieTrailer?.key}
                            opts={opts}
                            onReady={(e) => e.target.pauseVideo()}
                        />
                    </div>
                )}
            </div>
            <div className=' space-y-4'>
                <div className='flex items-center flex-wrap text-xs'>
                    <h2 className='text-3xl ' data-testid="movie-title">{title}</h2>

                    <p data-testid="movie-release-date">{release_date}</p>

                    <p data-testid="movie-runtime">{runtime}m</p>


                    <div className='flex items-center gap-x-2'>
                        {genres.map((genre) => (
                            <p
                                key={genre.id}
                                className='text-site-red'
                            >
                                {genre.name}
                            </p>
                        ))}
                    </div>

                    <div className='flex items-center gap-x-4'>

                        <p className='text-black/50'>{vote_average.toFixed(1)}</p>
                    </div>
                </div>
                <div className=''>
                    <div className='space-y-2'>
                        <p className='text-justify' data-testid="movie-overview">{overview}</p>
                        {castLoading ? (

                            "..."
                        ) : (
                            <>
                                <div>
                                    <p>
                                        Director:{" "}
                                        {director.map((d) => (
                                            <span
                                                key={d.name}
                                                className='text-site-red'
                                            >
                                                {d.name},
                                            </span>
                                        ))}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Writers:{" "}
                                        {writers.map((w) => (
                                            <span
                                                key={w.name}
                                                className='text-site-red'
                                            >
                                                {w.name},
                                            </span>
                                        ))}
                                    </p>
                                </div>
                                <div>
                                    <p>
                                        Stars:{" "}
                                        {stars.map((s) => (
                                            <span
                                                key={s.name}
                                                className='text-site-red'
                                            >
                                                {s.name},
                                            </span>
                                        ))}
                                    </p>
                                </div>
                            </>
                        )}
                        <div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

