import React, { useEffect, useState } from 'react'
import { Icons } from "../../Atoms";
import axios from 'axios';



export const SearchBar = () => {
    // const API_URL = "https://api.themoviedb.org/3"
    // const [movies, setMovies] = useState([])
    // const [searchKey, setSearchKey] = useState("");

    // const fetchMovies = async (searchKey) => {
    //     const type = searchKey ? "search" : "discover"
    //     const { data: { results } } = await axios.get(`${API_URL}/${type}/movie`, {
    //         params: {
    //             api_key: '5875295ffa7a025202b7685ccfb682ed',
    //             query: searchKey
    //         }
    //     }
    //     )
    //     setMovies(results)
    // }

    // useEffect(() => {
    //     fetchMovies()
    // }, [])


    // const searchMovies = (e) => {
    //     e.target.prevent
    //     setSearchKey(e.target.value)
    // }

    return (
        <div className='flex 
        justify-center
        items-center 
        mt-[20px]
        mr-[250px]
        '>
            <form>
                <input type="text" placeholder='What do you want to watch?' className='
            w-[400px]
             h-[30px]
             bg-transparent
             rounded-[8px]
             border-white
             border-[1px]
             border-solid
             text-[12px]
             text-white
             placeholder:pl-2
             ' />
                <button type='submit'><Icons className="ml-[-22px] " name="search" /></button>
            </form>

        </div>
    )
}
