import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Icons, Images, Text } from "../../Atoms";
import { NavBar } from '../NavBar';
import imdb from "../../../assets/imdb.png";
import PngItem from "../../../assets/PngItem.png";
// import { ReactYouTube } from '../../Pages';

export const BannerImg = () => {
    const [movie, setMovie] = useState([]);
    const [movieBanner, setMovieBanner] = useState("");

    const truncate = (input) =>
        input.length > 250 ? `${input.substring(0, 176)}...` : input;

    useEffect(() => {
        const getMovie = async () => {
            try {
                const apiDataKey = '5875295ffa7a025202b7685ccfb682ed';
                const res = await axios.get(
                    `https://api.themoviedb.org/3/discover/movie?api_key=${apiDataKey}&sort_by=popularity.desc&language=en-US&page=1`

                );
                const randBanner = res.data.results.slice(0, 8);
                setMovie(randBanner)

                const randMovie = randBanner[Math.floor(Math.random() * randBanner.length)];
                setMovieBanner(randMovie);

            } catch (err) {
                console.error(`Error fetching data:`, err);
            }
        };

        getMovie();
    }, [])

    return (
        <div className="">
            <div
                className=""
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movieBanner?.backdrop_path})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    height: '80vh',
                    filter: 'brightness(0.8)',
                }}
            >
                {/* <ReactYouTube /> */}

                {movieBanner && (
                    <NavBar>
                        <div className="ml-16 mr-5 text-white">
                            <Text type="p" className='mt-10 text-5xl' text={movieBanner.title} />
                            <div className="flex my-3 text-xs items-center ">
                                <div className="flex items-center my-5">
                                    <Images name="image" src={imdb} alt="imdb" />
                                    <span className="ml-6 text-lg">{movieBanner.vote_average * 10}.0/ 100</span>
                                </div>
                                <div className="flex ml-16 items-center">
                                    <Images name="image" src={PngItem} alt="cherry" className="mr-2" />
                                    <span className='text-lg'>{movieBanner.vote_average * 100 / 10}%</span>
                                </div>
                            </div>
                            <p className='text-xl'>{truncate(movieBanner.overview)}</p>
                            <div className='flex items-center my-5'>
                                <a className=' flex items-center play-btn text-white text-xl bg-[#BE123C]'>
                                    <Icons name="button" className='' />
                                </a>
                            </div>
                        </div>
                    </NavBar>
                )}
            </div>

        </div>
    )
}
