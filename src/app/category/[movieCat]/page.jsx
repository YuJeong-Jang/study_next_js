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
  try {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MDM3YTAwN2ZhMmE5MzM1NTdmNWYyMzBlMGYyZTYwZiIsIm5iZiI6MTcyNDEyMTgzNS45Mzg1OTEsInN1YiI6IjY0OTkzOGVkNmY0M2VjMDBjNWM3MmY4NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.lKLi0NyV3qV0XNsDaZbeHw6IWrAjDam7TWu0nq9wxnc",
      },
    };

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${movieCat}?language=ko-KR&page=1&region=kr`,
      options
    );
    const json = await response.json();
    const movies = json.results; // 데이터 확보
    // console.log(movies);/
    return (
      <MovieList movies={movies}/>
    );
  } catch (e) {
    throw Error(e);
  }
}
