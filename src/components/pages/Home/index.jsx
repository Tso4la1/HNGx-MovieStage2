import React, { useContext } from "react"
import { Header } from "../../../Components/Organisms/Header/index"
import { FeaturedMovies } from "../../Organisms/FeaturedMovies/index"
import { Layout } from "../../../../src/layout/Layout"


export const Home = () => {

	return (
		<Layout>
			<Header />
			<FeaturedMovies />
		</Layout>
	)
}
