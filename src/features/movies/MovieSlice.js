import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import movieApi from "../../common/api/movieApi";
import {APIKey} from "../../common/api/movieApiKey";

export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies',
    async () => {
        const movieText = "Avengers";
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${movieText}&type=movie`)
        return response.data;
    })

export const fetchAsyncShows = createAsyncThunk('movies/fetchAsyncShows',
    async () => {
        const series = "Friends";
        const response = await movieApi.get(`?apiKey=${APIKey}&s=${series}&type=series`)
        return response.data;
    })


export const fetchAsyncShowsOrMovieDetails = createAsyncThunk('movies/fetchAsyncShowsOrMovieDetail',
    async (id) => {
        const response = await movieApi.get(`?apiKey=${APIKey}&i=${id}&Plot=full`)
        return response.data;
    })


const initialState = {
    movies: {},
    shows: {},
    selectedMovieOrShow:{},
}
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

        removeSelectedMovieOrShow:(state)=>{
            state.selectedMovieOrShow = {}
        },
    },
    extraReducers: {
        [fetchAsyncMovies.pending]: () => {
            console.log("Pending...")
        },
        [fetchAsyncMovies.fulfilled]: (state, {payload}) => {
            console.log("Success!")
            return {...state, movies: payload}
        },
        [fetchAsyncMovies.rejected]: () => {
            console.log("Rejected!")
        },
        [fetchAsyncShows.fulfilled]: (state, {payload}) => {
            console.log("Success!")
            return {...state, shows: payload}
        },
        [fetchAsyncShowsOrMovieDetails.fulfilled]: (state, {payload}) => {
            console.log("Success!")
            return {...state, selectedMovieOrShow: payload}
        },
    }
})

export const {removeSelectedMovieOrShow} = movieSlice.actions
export const getAllMovies = (state) => state.movies.movies
export const getAllShows = (state) => state.movies.shows
export const getSelectedMovieOrShow= (state) => state.movies.selectedMovieOrShow
export default movieSlice.reducer