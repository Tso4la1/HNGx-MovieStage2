import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Layout } from "../../../layout/Layout"
import { client } from "../../../utils/axios"
import { MovieInfo } from "../../../Components/Organisms/MovieInfo/index"
import { MovieCard } from "../../../Components/Organisms/MovieCard/index"

export const MovieDetails = () => {
	const [movieDetails, setMovieDetails] = useState({})
	const [isLoading, setIsLoading] = useState(true)
	const [similar, setSimilar] = useState([])
	const [similarLoading, setSimilarLoading] = useState(true)

	const params = useParams()
	const { movieID } = params

	useEffect(() => {
		setMovieDetails({})
		setIsLoading(true)

		client
			.get(movieID)
			.then((res) => {
				setMovieDetails(res.data)
				setIsLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [movieID])



	useEffect(() => {
		setSimilar([])
		setSimilarLoading(true)
		client
			.get(`${movieID}/similar`)
			.then((res) => {
				setSimilar(res.data.results.slice(0, 10))
				setSimilarLoading(false)
			})
			.catch((err) => {
				console.log(err)
			})
	}, [movieID])

	return (
		<Layout>
			{isLoading ? (
				<div className='flex items-center justify-center w-full min-h-[400px]'>

				</div>
			) : (
				<div className='w-full'>
					<MovieInfo details={movieDetails} />
				</div>
			)}
			{similarLoading ? (
				<div className='flex items-center justify-center w-full min-h-[400px]'>

				</div>
			) : (
				<div className="w-[80%] py-20 mx-auto md:w-4/5 space-y-4">
					<h2 className="text-3xl font-medium">Similar</h2>
					<div className=' gap-x-4 gap-y-20 flex flex-col md:flex-row flex-wrap '>
						{similar.map((movie) => (
							<Fragment key={movie.id}>

								<MovieCard movie={movie} />
							</Fragment>
						))}
					</div>
				</div>
			)}
		</Layout>
	)
}
