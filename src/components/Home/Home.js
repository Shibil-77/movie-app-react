import React, { useEffect } from "react";
import MovieListing from "../MovieListing/MovieListing";
import Banner from "../Banner/Banner";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img">
        <Banner/>
      </div>
      <MovieListing />
    </div>
  );
};

export default Home;
