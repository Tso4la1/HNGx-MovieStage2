import React, { Fragment, useEffect, useState } from "react"
import { client } from "../../../utils/axios"
import { MovieCard } from "../../Organisms/MovieCard/index"
// import { Dna } from "react-loader-spinner"
// import { AiOutlineArrowRight } from "react-icons/ai"

export const FeaturedMovies = () => {
    const [movies, setMovies] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setIsLoading(true)
        client
            .get("top_rated")
            .then((res) => {
                setMovies(res.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    // console.log(movies)
    return (
        <div className='w-full space-y-10 py-10'>
            <div className='w-full flex items-center justify-between px-8'>
                <h2 className='text-lg md:text-4xl font-normal'>Featured Movies</h2>
                <div className="flex items-center gap-x-4 text-site-red cursor-pointer">
                    <span>See More</span>
                    {/* <AiOutlineArrowRight /> */}
                </div>
            </div>
            <div className='relative w-full'>
                {isLoading ? (
                    <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'>
                        {/* <Dna /> */}
                    </div>
                ) : (
                    <div className='w-[95%] md:w-4/5 mx-auto flex flex-col items-center justify-center  md:flex-row flex-wrap md:gap-x-2 gap-y-16'>
                        {movies.map((movie) => (
                            <Fragment key={movie.id}>
                                <MovieCard movie={movie} />
                            </Fragment>
                        )).slice(0, 10)}
                    </div>
                )}
            </div>
        </div>
    )
}