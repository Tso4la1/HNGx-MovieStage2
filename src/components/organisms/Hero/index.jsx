import React, { Fragment, useEffect, useState } from "react"
import { client } from "../../../utils/axios"
import { MovieBanner } from "../../Organisms/MovieBanner/index"

export const Hero = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        setIsLoading(true)
        client("now_playing")
            .then((res) => {
                setMovies(res.data.results.slice(0, 5))
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
                // setIsLoading(false)
            })
    }, [])
    // console.log(movies)
    return (
        <div className='w-full min-h-[480px] md:h-screen max-h-[1080px] relative'>
            {isLoading ? (
                <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>

                </div>
            ) : (
                <div className='absolute top-0 left-0 w-full h-full'>
                    {movies.map((movie) => (
                        <Fragment key={movie.id}>
                            <MovieBanner movie={movie} />
                        </Fragment>
                    ))[0]}
                </div>
            )}
        </div>
    )
}
