import axios from "axios"

const baseURL = "https://api.themoviedb.org/3/movie/"

export const client = axios.create({
	baseURL: baseURL,
	params: {	},
	headers: {
		Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ODc1Mjk1ZmZhN2EwMjUyMDJiNzY4NWNjZmI2ODJlZCIsInN1YiI6IjY0OTc3YWEzZWI3OWMyMDBjNTZkN2U3NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ._rwpgQieG4YP9E1Ot9sCUpHbTYuwlOutM16VUbx8qDQ',
	},
})