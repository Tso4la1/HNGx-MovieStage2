import React, { Fragment, useEffect, useState } from "react"
import { Layout } from "../../../layout/Layout"
import { useLocation } from "react-router-dom"
import { client } from "../../../utils/axios"
import { MovieCard } from "../../Organisms/MovieCard/index"

export const SearchResults = () => {
    const [searchResults, setSearchResults] = useState([])

    const [isLoading, setIsLoading] = useState(true)

    const location = useLocation()

    useEffect(() => {
        const searchTerm = location?.search.split("=")[1]
        setIsLoading(true)
        client
            .get(`https://api.themoviedb.org/3/search/movie?query=${searchTerm}`, { baseURL: "" })
            .then((res) => {
                setSearchResults(res?.data.results)
                setIsLoading(false)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [location])

    console.log(location)
    return (
        <Layout>
            <div className="mt-20">
                <h2 className="w-4/5 mx-auto text-3xl md:text-5xl">Search results for <span className="text-site-red">{location?.search.split('=')[1]}</span></h2>
                {isLoading ? (
                    <div className='w-screen h-screen flex items-center justify-center'>
                        {/* <Dna /> */}
                    </div>
                ) : (
                    <div className='w-[90%] md:w-4/5 mx-auto mt-20 flex flex-wrap gap-x-2'>
                        {searchResults.map((movie) => (
                            <Fragment key={movie.id}>
                                <MovieCard movie={movie} />
                            </Fragment>
                        ))}
                    </div>
                )}
            </div>
        </Layout>
    )
}