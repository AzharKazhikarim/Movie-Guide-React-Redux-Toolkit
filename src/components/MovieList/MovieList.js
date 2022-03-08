import React from 'react'
import {getAllMovies, getAllShows} from "../../features/movies/MovieSlice";
import {useSelector} from "react-redux";
import MovieCard from "../MovieCard/MovieCard";
import "./MovieList.scss"
import {Settings} from "../../common/settingsSlider";
import Slider from "react-slick";
const MovieList = () => {
    const movies = useSelector(getAllMovies)
    const shows = useSelector(getAllShows)
    let renderMovies, renderShows = ""



    renderMovies = movies.Response === "True" ? (
        movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie}/>
        ))
    ) : (<div className="movies-error"><h3>{movies.Error}</h3></div>)


    renderShows = shows.Response === "True" ? (
        shows.Search.map((show, index) => (
            <MovieCard key={index} data={show}/>
        ))
    ) : (<div className="movies-error"><h3>{shows.Error}</h3></div>)
    return (
        <>
            <div className="movieWrapper">
                <div className="movieList">
                    <h2>Movies</h2>
                    <div className="movieContainer">
                        <Slider {...Settings}>
                        {renderMovies}
                        </Slider>
                    </div>
                </div>

                <div className="movieList">
                    <h2>Shows</h2>
                    <div className="movieContainer">
                        <Slider {...Settings}>
                        {renderShows}
                        </Slider>
                    </div>
                </div>

            </div>
        </>
    )
}
export default MovieList;
