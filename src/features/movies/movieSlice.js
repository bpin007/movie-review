import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../common/apis/movieApi";
import { APIkey } from "../../common/apis/moviesApiKey";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async (term) => {
    // const movieText = "Harry";
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${term}&type=movie`
    );
    return response.data;
  }
);
export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async (term) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(
      `?apikey=${APIkey}&s=${term}&type=series`
    );
    return response.data;
  }
);
export const fetchAsyncMoviesOrShows = createAsyncThunk(
  "movies/fetchAsyncMoviesOrShows",
  async (id) => {
    // const seriesText = "Friends";
    const response = await movieApi.get(`?apikey=${APIkey}&i=${id}&Plot=full`);
    return response.data;
  }
);

const initialState = {
  movies: [],
  shows: [],
  selectedMOvieOrShow: [],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    //why you made data=[]
    // addMovies: (state, { payload }) => {
    //   state.movies = payload?.Search || [];
    // },
    removeSelectedMoviesOrShows: (state) => {
      state.selectedMOvieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("pending");
    },

    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("feched successfully");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("feched successfully");
      return { ...state, shows: payload };
    },
    [fetchAsyncMoviesOrShows.fulfilled]: (state, { payload }) => {
      console.log("feched successfully");
      return { ...state, selectedMOvieOrShow: payload };
    },
  },
});

export const { removeSelectedMoviesOrShows } = movieSlice.actions;
// export const getAllMovies = (state) => state.movies.movies;
export default movieSlice.reducer;

//JIVPK8877D
