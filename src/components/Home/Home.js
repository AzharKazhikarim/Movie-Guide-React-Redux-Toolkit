import React, {useEffect} from 'react'
import MovieList from "../MovieList/MovieList";
import {useDispatch, useSelector} from "react-redux";
import {fetchAsyncMovies, fetchAsyncShows} from "../../features/movies/MovieSlice";
import {loading} from "../../features/movies/MovieSlice";
import LoadingIcons from 'react-loading-icons'
import "./Home.scss"
const Home = () => {

    const dispatch = useDispatch()
    const loader = useSelector(loading)

    useEffect(() => {
        const movie="Avengers";
        const show="Avengers";
        dispatch(fetchAsyncMovies(movie))
        dispatch(fetchAsyncShows(show))
    }, [dispatch])
    return (
        <div>
            <div className="banner-img">
            </div>
            {loader === true ? (

                        <LoadingIcons.Bars />

            ) : (
            <MovieList/>
                )}
        </div>
    )
}

export default Home;