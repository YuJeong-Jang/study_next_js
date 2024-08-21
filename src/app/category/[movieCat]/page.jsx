import { fetchMoviesWithCategory } from "@/app/actions/fetchMovies";
import MovieDetailsPage from "@/app/movie/details/[movieId]/page";
import MovieCard from "@/Components/MovieCard";
import MovieDetails from "@/Components/MovieDetails";
import MovieList from "@/Components/MovieList";
import { redirect } from "next/navigation";
import React from "react";

export default async function MovieCategoryPage({ params }) {
  const { movieCat } = params;

  // if (movieCat === "now_playing") {
  //   // redirect
  //   redirect('/')
  // } else if (movieCat === "top_rated") {
  //   redirect('/')
  // } else if (movieCat === "upcoming") {
  //   redirect('/')
  // } else {
  //   throw Error("Invalid route");
  // }

  // // client side landering
  // // 위에서 아래로의 컴파일
  // try {
  //   const options = {
  //     method: "GET",
  //     headers: {
  //       accept: "application/json",
  //       Authorization: `Bearer ${process.env.API_KEY}`,
  //     },
  //   };

  //   const response = await fetch(
  //     `https://api.themoviedb.org/3/movie/${movieCat}?language=ko-KR&page=1&region=kr`,
  //     options
  //   );
  //   const json = await response.json();
  //   const movies = json.results; // 데이터 확보
  //   // console.log(movies);/
  //   return <MovieList movies={movies} />;
  // } catch (e) {
  //   throw Error(e);
  // }

  // server side ladering
  const movies = await fetchMoviesWithCategory(movieCat);

  return <MovieList movies={movies} />;
}
